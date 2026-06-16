import Header from "../../components/Header";
import QuantityControl from "../../components/QuantityControl";

import useCartStore from "../../store/cartStore";
import "./cartpage.css";

export default function CartPage() {

    const cart = useCartStore(
        (state) => state.cart
    );

    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    );

    const totalPrice = cart.reduce(
        (total, product) =>
            total + (
                product.price * product.quantity
            ),
        0
    );

    return (
        <div>
            <Header hideSearch />

            <main className="cart-page">
                <h1>Your Cart</h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className="cart-item"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <div className="cart-item-info">
                                    <h2>{product.name}</h2>

                                    <p className="item-price">
                                        {product.price} kr each
                                    </p>

                                    <QuantityControl
                                        quantity={product.quantity}
                                        onIncrease={() =>
                                            increaseQuantity(product.id)
                                        }
                                        onDecrease={() =>
                                            decreaseQuantity(product.id)
                                        }
                                    />

                                    <p className="item-total">
                                        Total:{" "}
                                        {product.price *
                                            product.quantity}{" "}
                                        kr
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="cart-total">
                            Cart Total: {totalPrice} kr
                        </div>

                        <button className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </>
                )}
            </main>
        </div>
    );
}