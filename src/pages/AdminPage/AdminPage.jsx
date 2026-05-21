import { useState } from "react";

import Header from "../../components/Header";
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

  const isAdmin = useAuthStore(
    (state) => state.isAdmin);

  const login = useAuthStore(
    (state) => state.login
  )

  function handleLogin(e) {
    e.preventDefault();

    const success = login(
      email,
      password
    )

    if (!success) {
      setLoginError(
        "Wrong email or password"
      )
    }
  }
  function handleSubmit(e) {

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

    console.log("VALID PRODUCT");
    console.log({
      name,
      price,
      category,
      image
    });

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  }

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
            Add Product
          </button>
        </form>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

      </main>
    </div>
  );
}