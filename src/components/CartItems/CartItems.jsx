import './CartItems.css';
import {useContext} from "react";
import {AppContext} from "../../context/AppContext.jsx";

const CartItems = () => {
    const {cartItems, removeFromCart, updateQuantity} = useContext(AppContext);

    return (
        <div className="cart-items-container">
            <h4 className="cart-title">Your Cart</h4>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty</p>
            ) : (
                <div className="cart-items-list">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="item-info">
                                <h6 className="item-name">{item.name}</h6>
                                <p className="item-price">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="item-controls">
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-btn minus"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button
                                        className="quantity-btn plus"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CartItems;