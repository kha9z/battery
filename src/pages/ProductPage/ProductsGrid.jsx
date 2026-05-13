import products from "../../data/products";
import useCartStore from "../../store/cartStore";

export default function ProductsGrid({
  search
}) {

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const filteredProducts = products.filter(
    (product) =>

      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <main className="products-grid">

      {filteredProducts.map((product) => (

        <div
          key={product.id}
          className="product-card"
        >

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <h2>{product.name}</h2>

          <p>{product.price} kr</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>

        </div>

      ))}

    </main>
  );
}