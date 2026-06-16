import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import useCartStore from "../../store/cartStore";
import ProductCard from "../../components/ProductCard";

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
        querySnapshot.docs.map((doc) => ({
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
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cartItem}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}

    </section>
  );
}