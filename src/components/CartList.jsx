import CartItem from "./CartItem.jsx";

export default function CartList({ items, onIncrease, onDecrease, onRemove }) {
  if (!items.length) {
    return <p className="empty-cart">Cart is empty</p>;
  }

  return (
    <div className="cart-items">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
