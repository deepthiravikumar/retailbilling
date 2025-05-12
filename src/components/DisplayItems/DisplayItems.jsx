import React, { useContext } from 'react';
import './DisplayItems.css';
import { AppContext } from '../../context/AppContext.jsx';

const DisplayItems = ({ products }) => {
    const { addToCart } = useContext(AppContext);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="display-items-container">
            <h3 className="mb-4">Available Products</h3>
            <div className="items-grid">
                {products.map(product => (
                    <div key={product.id} className="item-card">
                        <div className="item-image-placeholder">
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="item-image"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150?text=No+Image";
                                    }}
                                />
                            ) : (
                                <span className="item-initial">{product.name.charAt(0)}</span>
                            )}
                        </div>
                        <div className="item-details">
                            <h5 className="item-name">{product.name}</h5>
                            <p className="item-category">{product.category}</p>
                            <p className="item-description">{product.description}</p>
                            <div className="item-footer">
                                <span className="item-price">{formatPrice(product.price)}</span>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayItems;