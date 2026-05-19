import Header from "../../components/Header";

import useCartStore from "../../store/cartStore";
import "./cartpage.css"

export default function CartPage() {

    const cart = useCartStore(
        (state) => state.cart
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

                    cart.map((product) => (

                    <div
                        key={product.id}
                        className="cart-item"
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                            width={120}
                        />

                    <div>
                        <h2>{product.name}</h2>
                        <p>
                            Price: {product.price} kr
                        </p>

                        <p>
                            Quantity: {product.quantity}
                        </p>

                        <p>
                            Total:
                            {" "}
                            {product.price * product.quantity} kr
                        </p>
                    </div>
                    </div>
                )))}

                <h2>
                    Cart Total:
                    {" "}
                    {totalPrice} kr
                </h2>

                </main>
                </div>
            );
        }
            