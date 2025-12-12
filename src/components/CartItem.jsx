export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-main">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">
          ${item.price.toFixed(2)} x {item.quantity}
        </div>
        <div className="cart-item-qty">
          Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
      </div>

      <div className="cart-item-actions">
        <button className="btn btn-primary" onClick={() => onIncrease(item.id)}>
          +
        </button>
        <button className="btn btn-primary" onClick={() => onDecrease(item.id)}>
          -
        </button>
        <button className="btn btn-danger" onClick={() => onRemove(item.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
