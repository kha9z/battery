import QuantityControl from "./QuantityControl";

export default function ProductCard({
    product,
    cartItem,
    addToCart,
    increaseQuantity,
    decreaseQuantity
}) {
    return (
        <article
            className="product-card"
        >

            <img
                className="product-image"
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

                <QuantityControl
                    quantity={cartItem.quantity}
                    onIncrease={() =>
                        increaseQuantity(product.id)
                    }
                    onDecrease={() =>
                        decreaseQuantity(product.id)
                    }
                />

            )}
        </article>
    );
}