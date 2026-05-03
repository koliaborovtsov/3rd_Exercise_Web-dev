import { Link } from "react-router-dom";

function OrderConfirmation() {
	const orderNumber = Math.floor(Math.random() * 1000000);

	return (
		<div className="order-confirmation">
			<div className="success-icon">✓</div>
			<h1>Заказ успешно оформлен!</h1>
			<p className="order-number">
				Номер вашего заказа: <strong>#{orderNumber}</strong>
			</p>
			<p>
				Наш менеджер свяжется с вами в ближайшее время для подтверждения
				заказа.
			</p>
			<p>Спасибо за покупку!</p>
			<Link to="/" className="btn btn-primary">
				Вернуться в каталог
			</Link>
		</div>
	);
}

export default OrderConfirmation;
