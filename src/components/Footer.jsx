import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <h3>Batteries not included</h3>

            <Link
                to="/admin"
                className="admin-link"
            >
                Admin Login
            </Link>
        </footer>
    );
}