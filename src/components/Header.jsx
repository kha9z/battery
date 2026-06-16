import "./header.css";

import { Link } from "react-router-dom";

import useCartStore from "../store/cartStore";
import headerlogo from "../assets/LogoHeader.png";
import mascotLogo from "../assets/Mascot.png";
import cartIcon from "../assets/Cart-Icon.png";

export default function Header({
	search,
	setSearch,
	hideSearch
}) {

	const cart = useCartStore(
		(state) => state.cart
	);

	const totalQuantity = cart.reduce(
		(total, item) =>
			total + item.quantity,
		0
	);

	return (
		<header className="header">

			<div className="left-section">
				<Link
					to="/"
					className="header-link"
				>
					<img
						className="header-logo"
						src={headerlogo}
						alt="Battery Logo"
					/>

					<img
						className="mobile-logo"
						src={mascotLogo}
						alt="Battery Mascot"
					/>

				</Link>
			</div>

			{!hideSearch && (
				<div className="middle-section">
					<div className="search-container">

					<input
						className="search-bar"
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) =>
							setSearch(e.target.value)
						}
					/>

					<button className="search-button">
						<span className="search-icon">🔎︎</span>
					</button>
				</div>
				</div>
			)}

			<div className="right-section">

				<Link
					to="/cart"
					className="header-link cart-link"
				>

					<div className="cart-quantity">
						{totalQuantity}
					</div>

					<img
						src={cartIcon}
						alt="Cart"
						className="cart-icon"
					/>
				</Link>
			</div>
		</header>
	);
}