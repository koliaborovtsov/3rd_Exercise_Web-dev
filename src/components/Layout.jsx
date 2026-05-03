import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Layout() {
	const { getCartCount } = useCart();

	return (
		<div className="app">
			<header className="header">
				<div className="container">
					<div className="header-content">
						<Link to="/" className="logo">
							<span className="logo-icon">💡</span>
							<span className="logo-text">LampStore</span>
						</Link>
						<nav className="nav">
							<Link to="/" className="nav-link">
								Каталог
							</Link>
							<Link to="/cart" className="nav-link cart-link">
								Корзина
								{getCartCount() > 0 && (
									<span className="cart-badge">
										{getCartCount()}
									</span>
								)}
							</Link>
						</nav>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<Outlet />
				</div>
			</main>
		</div>
	);
}

export default Layout;
