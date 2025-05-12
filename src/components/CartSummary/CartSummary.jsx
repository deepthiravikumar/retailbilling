import './CartSummary.css';
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";

const CartSummary = ({customerName, mobileNumber, setMobileNumber, setCustomerName}) => {
    const {cartItems} = useContext(AppContext);

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.03; // 3% tax
    const total = subtotal + tax;

    const handlePlaceOrder = (paymentMethod) => {
        if (!customerName || !mobileNumber) {
            alert("Please fill in customer details");
            return;
        }
        if (cartItems.length === 0) {
            alert("Your cart is empty");
            return;
        }
        // Here you would typically send the order to your backend
        console.log("Placing order:", {
            customerName,
            mobileNumber,
            items: cartItems,
            subtotal,
            tax,
            total,
            paymentMethod
        });
        alert(`Order placed successfully with ${paymentMethod}`);
    };

    return (
        <div className="cart-summary">
            <div className="summary-details">
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Tax (3%):</span>
                    <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total:</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
            </div>

            <div className="payment-buttons">
                <button
                    className="payment-btn cash"
                    onClick={() => handlePlaceOrder('cash')}
                >
                    Pay with Cash
                </button>
                <button
                    className="payment-btn upi"
                    onClick={() => handlePlaceOrder('upi')}
                >
                    Pay with UPI
                </button>
            </div>
        </div>
    )
}

export default CartSummary;