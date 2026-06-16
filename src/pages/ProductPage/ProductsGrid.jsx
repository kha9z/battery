import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import useCartStore from "../../store/cartStore";

export default function ProductsGrid({ search }) {

  const [products, setProducts] = useState([]);

  const cart = useCartStore(
    (state) => state.cart
  );

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  useEffect(() => {

    async function fetchProducts() {

      const querySnapshot =
        await getDocs(
          collection(db, "products")
        );

      const productsData =
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

      setProducts(productsData);
    }

    fetchProducts();

  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="products-grid">
      {filteredProducts.map((product) => {
        const cartItem = cart.find(
          (item) => item.id === product.id
        );

        return (

          <article
            key={product.id}
            className="product-card"
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>{product.price} kr</p>

            {!cartItem ? (

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add to Cart
              </button>

            ) : (

              <div>
                <button
                  onClick={() =>
                    decreaseQuantity(product.id)
                  }
                >
                  -
                </button>

                <span>
                  {cartItem.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(product.id)
                  }
                >
                  +
                </button>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}