import products from "../../data/products";

import useCartStore from "../../store/cartStore";

export default function ProductsGrid({

  search

}) {

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

      {filteredProducts.map((product) => {

        const cartItem = cart.find(
          (item) => item.id === product.id
        );

        return (

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

            {cartItem ? (

              <div className="quantity-controls">

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

            ) : (

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add to cart
              </button>

            )}

          </div>

        );
      })}

    </main>
  );
}