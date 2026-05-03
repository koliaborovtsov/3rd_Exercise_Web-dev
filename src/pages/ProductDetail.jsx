import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetail() {
	const { id } = useParams();
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);

	const product = products.find((p) => p.id === parseInt(id));

	if (!product) {
		return (
			<div className="not-found">
				<h2>Товар не найден</h2>
				<Link to="/">Вернуться в каталог</Link>
			</div>
		);
	}

	const handleAddToCart = () => {
		addToCart(product, quantity);
	};

	return (
		<div className="product-detail">
			<Link to="/" className="back-link">
				← Назад в каталог
			</Link>

			<div className="product-detail-content">
				<div className="product-detail-image">
					<img src={product.image} alt={product.name} />
				</div>

				<div className="product-detail-info">
					<h1>{product.name}</h1>
					<span className="category-badge">{product.category}</span>
					<p className="price">{product.price} ₽</p>

					<div className="description">
						<h3>Описание</h3>
						<p>{product.description}</p>
					</div>

					<div className="specifications">
						<h3>Характеристики</h3>
						<table>
							<tbody>
								<tr>
									<td>Мощность:</td>
									<td>{product.specifications.power}</td>
								</tr>
								<tr>
									<td>Цветовая температура:</td>
									<td>{product.specifications.colorTemp}</td>
								</tr>
								<tr>
									<td>Цоколь:</td>
									<td>{product.specifications.base}</td>
								</tr>
								<tr>
									<td>Световой поток:</td>
									<td>
										{product.specifications.luminousFlux}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="add-to-cart-section">
						<div className="quantity-control">
							<button
								onClick={() =>
									setQuantity((q) => Math.max(1, q - 1))
								}
								className="qty-btn"
							>
								-
							</button>
							<span className="quantity">{quantity}</span>
							<button
								onClick={() => setQuantity((q) => q + 1)}
								className="qty-btn"
							>
								+
							</button>
						</div>
						<button
							className="add-to-cart-btn"
							onClick={handleAddToCart}
						>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
