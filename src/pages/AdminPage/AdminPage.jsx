import { useState, useEffect } from "react";
import "./adminpage.css"

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

import { db } from "../../firebase";

import Header from "../../components/Header";
import AdminProductList from "../../components/AdminProductList";

import productSchema from "../../utils/productSchema";
import useAuthStore from "../../store/authStore";

import "./AdminPage.css";

export default function AdminPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const isAdmin = useAuthStore(
    (state) => state.isAdmin
  );

  const login = useAuthStore(
    (state) => state.login
  );

  function handleLogin(e) {

    e.preventDefault();

    const success = login(
      email,
      password
    );

    if (!success) {
      setLoginError(
        "Wrong email or password"
      );
    }
  }

  async function handleSubmit(e) {

    e.preventDefault();

    const result = productSchema.validate({
      name,
      price,
      category,
      image
    });

    if (result.error) {

      setError(
        result.error.details[0].message
      );

      return;
    }

    setError("");

    if (editingId) {

      await updateDoc(
        doc(db, "products", editingId),
        {
          name,
          price: Number(price),
          category,
          image
        }
      );

      setEditingId(null);

    } else {

      await addDoc(
        collection(db, "products"),
        {
          name,
          price: Number(price),
          category,
          image
        }
      );
    }

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    fetchProducts();
  }

  async function handleDelete(id) {

    const confirmed = window.confirm(
      "Delete this product?"
    );

    if (!confirmed) return;

    await deleteDoc(
      doc(db, "products", id)
    );

    fetchProducts();
  }

  function handleEdit(product) {

    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setImage(product.image);
  }

  async function fetchProducts() {

    const querySnapshot =
      await getDocs(
        collection(db, "products")
      );

    const productsData =
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!isAdmin) {

    return (

      <div>
        <Header hideSearch />

        <main className="admin-page">
          <h1>Admin Login</h1>

          <form
            className="admin-form"
            onSubmit={handleLogin}
          >

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login
            </button>
          </form>

          {loginError && (

            <p className="error-message">
              {loginError}
            </p>
          )}
        </main>
      </div>
    );
  }

  return (

    <div>
      <Header hideSearch />
      <main className="admin-page">

        <h1>Add Product</h1>

        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Image path"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
          />

          <button type="submit">

            {editingId
              ? "Save Changes"
              : "Add Product"}

          </button>
        </form>

        {error && (

          <p className="error-message">
            {error}
          </p>

        )}

        <h2>Products</h2>

        <AdminProductList
          products={products}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </main>
    </div>
  );
}