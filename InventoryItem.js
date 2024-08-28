function InventoryItem({ name, type, quantity = 0, price = 0 }) {
  const lowStock = 5;
  const highValue = 500;

  const totalValue = price * quantity;

  return (
    <div>
      <h2>
        {/*<!-- TODO: Render the item's details. -->*/}
        {name}({type})
      </h2>
      {/* <!-- TODO: Render the low stock alert based on the quantity of the item. --> */}
      {quantity < lowStock && (
        <Message>
          <p>🚨 Low Stock! {quantity} remained.</p>
        </Message>
      )}
      {/* <!-- TODO: Render the high value alert based on the total value of the item. --> */}
      {totalValue > highValue && (
        <Message>
          <p>💎 high Value - advise caution.</p>
        </Message>
      )}
    </div>
  );
}
