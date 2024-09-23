import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart, removeItem } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + price;
  }, 0);

  return (
    <div className="cart p-8 bg-gray-50 shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
        Your Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <div className="cart-items space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="cart-item flex justify-between items-center bg-white p-4 rounded-md shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <h3 className="font-semibold text-lg text-gray-700">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-medium text-gray-900">
                    {item.price}
                  </p>
                  <button
                    onClick={() => removeItem(index)} // Calling removeItem function
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total mt-6 text-right">
            <span className="text-2xl font-bold text-gray-800">
              Total: ₹{totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="checkout mt-8 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md text-lg">
              <Link to="/signup">Proceed to Checkout</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
