import { useCart } from "../CartContext";
// import Alert from "../components/Alert";

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    // Assuming price is in the format "$10"
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + price;
  }, 0);

  return (
    <div className="cart p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item flex justify-between mb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
          <div className="total mt-4 font-bold">
            Total: ₹{totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
