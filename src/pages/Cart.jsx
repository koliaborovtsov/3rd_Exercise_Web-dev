import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из каталога</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Корзина</h1>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.price} ₽</p>
            </div>
            <div className="cart-item-quantity">
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-total">
              {item.price * item.quantity} ₽
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-summary">
          <span>Итого:</span>
          <span className="cart-total">{getCartTotal()} ₽</span>
        </div>
        <Link to="/checkout" className="btn btn-primary">
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}

export default Cart;
