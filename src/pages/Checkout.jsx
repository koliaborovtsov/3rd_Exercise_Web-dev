import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
	const navigate = useNavigate();
	const { cart, getCartTotal, clearCart } = useCart();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		comment: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// Здесь должна быть отправка на сервер
		clearCart();
		navigate("/order-confirmation");
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="checkout">
			<h1>Оформление заказа</h1>

			<div className="checkout-content">
				<form onSubmit={handleSubmit} className="checkout-form">
					<h2>Контактные данные</h2>

					<div className="form-group">
						<label>Имя *</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							placeholder="Введите ваше имя"
						/>
					</div>

					<div className="form-group">
						<label>Email *</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							placeholder="example@mail.ru"
						/>
					</div>

					<div className="form-group">
						<label>Телефон *</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
							placeholder="+7 (999) 999-99-99"
						/>
					</div>

					<div className="form-group">
						<label>Адрес доставки *</label>
						<input
							type="text"
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
							placeholder="Введите адрес доставки"
						/>
					</div>

					<div className="form-group">
						<label>Комментарий к заказу</label>
						<textarea
							name="comment"
							value={formData.comment}
							onChange={handleChange}
							placeholder="Дополнительная информация"
							rows="3"
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary btn-submit"
					>
						Подтвердить заказ
					</button>
				</form>

				<div className="order-summary">
					<h2>Ваш заказ</h2>
					<div className="order-items">
						{cart.map((item) => (
							<div key={item.id} className="order-item">
								<span>
									{item.name} × {item.quantity}
								</span>
								<span>{item.price * item.quantity} ₽</span>
							</div>
						))}
					</div>
					<div className="order-total">
						<strong>Итого: {getCartTotal()} ₽</strong>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
