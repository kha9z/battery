import Header from "../../components/Header";

import useCartStore from "../../store/cartStore";

export default function CartPage() {

    const cart = useCartStore(
        (state) => state.cart
    );

    return (
        <div>
            <Header />

            <main className="cart-page">
                <h1>Your Cart</h1>
                {cart.map((product, index) => (
                    <div
                        key={index}
                        className="cart-item"
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                            width="120"
                        />

                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.price} kr</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}