import { useState } from "react";

import Header from "../../components/Header";

import productSchema from "../../utils/productSchema";

import "./AdminPage.css";

export default function AdminPage() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

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
            placeholder="Image URL"
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