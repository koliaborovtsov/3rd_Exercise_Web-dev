import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
	const { addToCart } = useCart();

	const handleAddToCart = (e) => {
		e.preventDefault();
		addToCart(product);
	};

	return (
		<div className="product-card">
			<Link to={`/product/${product.id}`} className="product-card-link">
				<div className="product-image">
					<img src={product.image} alt={product.name} />
				</div>
				<div className="product-info">
					<h3 className="product-name">{product.name}</h3>
					<span className="product-category">{product.category}</span>
					<p className="product-price">{product.price} ₽</p>
				</div>
			</Link>
			<button className="add-to-cart-btn" onClick={handleAddToCart}>
				В корзину
			</button>
		</div>
	);
}

export default ProductCard;
