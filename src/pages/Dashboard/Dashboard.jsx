// Dashboard.jsx (updated color scheme)
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const products = [
        {
            id: 1,
            name: 'Apple iPhone 15 Pro',
            description: 'Latest iPhone with A17 Pro chip and 120Hz ProMotion display',
            price: '₹1,29,900',
            category: 'Mobiles',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyqWhM6FpOw9ytHlKc4HhMSZ0OfjposIopA&s",
        },
        {
            id: 2,
            name: 'Samsung Galaxy S24 Ultra',
            description: 'Flagship Android phone with Snapdragon 8 Gen 3 and 200MP camera',
            price: '₹1,19,999',
            category: 'Mobiles',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXXCyC-Qg1bzPjlhLG_mE3XRKjfFkuzUyIA&s",
        },
        {
            id: 3,
            name: 'Sony WH-1000XM5',
            description: 'Industry-leading noise-cancelling wireless over-ear headphones',
            price: '₹29,990',
            category: 'Headphones',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScajZ-4ZFFgu8M80q98dBhcdDNojus59s1fA&s",
        },
        {
            id: 4,
            name: 'JBL Flip 6 Bluetooth Speaker',
            description: 'Portable waterproof speaker with powerful bass and 12hrs playtime',
            price: '₹11,999',
            category: 'Speakers',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJLHbktz1X8QoxkWLF8MK8Oki1DSMRBR5LQ&s",
        },
        {
            id: 5,
            name: 'Dell XPS 13 Plus',
            description: 'Premium ultrabook with 13.4-inch OLED display and Intel Core Ultra',
            price: '₹1,49,990',
            category: 'Laptops',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBcplluS6rzKyLbzoABwEqyCSzXslRQ593A&s",
        },
        {
            id: 6,
            name: 'Apple Watch Series 9',
            description: 'Smartwatch with new double-tap gesture and faster S9 chip',
            price: '₹41,900',
            category: 'Smartwatches',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqvp241LcIp5jbWncQp2lx74LrU_dNeKojQ&s",
        },
        {
            id: 7,
            name: 'Nothing Phone (2)',
            description: 'Stylish midrange smartphone with Glyph interface and Snapdragon 8+ Gen 1',
            price: '₹44,999',
            category: 'Mobiles',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSverWgok_J9BPjK9zNlbOxa0AHzrol4lOb4w&s",
        },
        {
            id: 8,
            name: 'boAt Airdopes 161',
            description: 'True wireless earbuds with 40hrs playtime and ASAP Charge',
            price: '₹1,299',
            category: 'Earbuds',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRya5hL5kII0ZgF0uV9pTItlCIYl-cFiJxuyA&s",
        }
    ];

    const features = [
        {
            title: "Easy Shopping",
            description: "Browse and purchase products with our intuitive interface",
            icon: "🛒"
        },
        {
            title: "Secure Checkout",
            description: "Safe and secure payment processing",
            icon: "🔒"
        },
        {
            title: "Fast Delivery",
            description: "Reliable shipping with real-time tracking",
            icon: "🚚"
        },
        {
            title: "24/7 Support",
            description: "Dedicated customer service anytime",
            icon: "📞"
        }
    ];

    const handleGetStarted = () => {
        navigate('/explore');
    };

    const handleFreeTrial = () => {
        navigate('/login');
    };

    const handleAddToCart = (productId) => {
        console.log(`Product ${productId} added to cart`);
        navigate('/explore');
    };

    return (
        <div className="ecommerce-homepage">
            {/* Hero Banner */}
            <section className="hero-banner" data-aos="fade-down">
                <div className="hero-content">
                    <h1>ShopEase Retail</h1>
                    <p>Your one-stop destination for quality products and seamless shopping</p>
                    <div className="cta-buttons">
                        <button className="primary-btn" onClick={handleGetStarted}>Shop Now</button>
                        <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features-section" data-aos="fade-up">
                <h2>Why Shop With Us?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="products-section" data-aos="fade-up">
                <h2>Featured Products</h2>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={product.id} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <span className="product-category">{product.category}</span>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <span className="product-price">{product.price}</span>
                                    <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="view-all-btn" onClick={() => navigate('/explore')}>View All Products</button>
            </section>

            {/* Testimonials */}
            <section className="testimonials" data-aos="fade-up">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card" data-aos="fade-right">
                        <p>"The checkout process was so smooth and my order arrived earlier than expected!"</p>
                        <div className="author">- Jessica L., Premium Member</div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-up">
                        <p>"Excellent customer service and product quality. Will shop here again!"</p>
                        <div className="author">- David M., Frequent Buyer</div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-left">
                        <p>"Best prices I've found online with fast shipping. Highly recommend!"</p>
                        <div className="author">- Sarah K., Loyal Customer</div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="footer-cta" data-aos="fade-up">
                <h2>Ready to Experience Seamless Shopping?</h2>
                <div className="auth-buttons">
                    <button className="primary-btn large" onClick={handleFreeTrial}>Login / Register</button>
                    <button className="secondary-btn large" onClick={() => navigate('/about')}>About Us</button>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;





// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Dashboard.css';
//
// const Dashboard = () => {
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         AOS.init({
//             duration: 800,
//             once: true,
//         });
//     }, []);
//
//     const products = [
//         {
//             id: 1,
//             name: 'Apple iPhone 15 Pro',
//             description: 'Latest iPhone with A17 Pro chip and 120Hz ProMotion display',
//             price: '₹1,29,900',
//             category: 'Mobiles',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyqWhM6FpOw9ytHlKc4HhMSZ0OfjposIopA&s",
//         },
//         {
//             id: 2,
//             name: 'Samsung Galaxy S24 Ultra',
//             description: 'Flagship Android phone with Snapdragon 8 Gen 3 and 200MP camera',
//             price: '₹1,19,999',
//             category: 'Mobiles',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXXCyC-Qg1bzPjlhLG_mE3XRKjfFkuzUyIA&s",
//         },
//         {
//             id: 3,
//             name: 'Sony WH-1000XM5',
//             description: 'Industry-leading noise-cancelling wireless over-ear headphones',
//             price: '₹29,990',
//             category: 'Headphones',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScajZ-4ZFFgu8M80q98dBhcdDNojus59s1fA&s",
//         },
//         {
//             id: 4,
//             name: 'JBL Flip 6 Bluetooth Speaker',
//             description: 'Portable waterproof speaker with powerful bass and 12hrs playtime',
//             price: '₹11,999',
//             category: 'Speakers',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJLHbktz1X8QoxkWLF8MK8Oki1DSMRBR5LQ&s",
//         },
//         {
//             id: 5,
//             name: 'Dell XPS 13 Plus',
//             description: 'Premium ultrabook with 13.4-inch OLED display and Intel Core Ultra',
//             price: '₹1,49,990',
//             category: 'Laptops',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBcplluS6rzKyLbzoABwEqyCSzXslRQ593A&s",
//         },
//         {
//             id: 6,
//             name: 'Apple Watch Series 9',
//             description: 'Smartwatch with new double-tap gesture and faster S9 chip',
//             price: '₹41,900',
//             category: 'Smartwatches',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqvp241LcIp5jbWncQp2lx74LrU_dNeKojQ&s",
//         },
//         {
//             id: 7,
//             name: 'Nothing Phone (2)',
//             description: 'Stylish midrange smartphone with Glyph interface and Snapdragon 8+ Gen 1',
//             price: '₹44,999',
//             category: 'Mobiles',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSverWgok_J9BPjK9zNlbOxa0AHzrol4lOb4w&s",
//         },
//         {
//             id: 8,
//             name: 'boAt Airdopes 161',
//             description: 'True wireless earbuds with 40hrs playtime and ASAP Charge',
//             price: '₹1,299',
//             category: 'Earbuds',
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRya5hL5kII0ZgF0uV9pTItlCIYl-cFiJxuyA&s",
//         }
//     ];
//
//     const features = [
//         {
//             title: "Easy Shopping",
//             description: "Browse and purchase products with our intuitive interface",
//             icon: "🛒"
//         },
//         {
//             title: "Secure Checkout",
//             description: "Safe and secure payment processing",
//             icon: "🔒"
//         },
//         {
//             title: "Fast Delivery",
//             description: "Reliable shipping with real-time tracking",
//             icon: "🚚"
//         },
//         {
//             title: "24/7 Support",
//             description: "Dedicated customer service anytime",
//             icon: "📞"
//         }
//     ];
//
//     const handleGetStarted = () => {
//         navigate('/explore');
//     };
//
//     const handleFreeTrial = () => {
//         navigate('/login');
//     };
//
//     const handleAddToCart = (productId) => {
//         console.log(`Product ${productId} added to cart`);
//         navigate('/explore');
//     };
//
//     return (
//         <div className="ecommerce-homepage">
//             {/* Hero Banner */}
//             <section className="hero-banner" data-aos="fade-down">
//                 <div className="hero-content">
//                     <h1>ShopEase Retail</h1>
//                     <p>Your one-stop destination for quality products and seamless shopping</p>
//                     <div className="cta-buttons">
//                         <button className="primary-btn" onClick={handleGetStarted}>Shop Now</button>
//                         <button className="secondary-btn" onClick={() => navigate('/about')}>Learn More</button>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Features */}
//             <section className="features-section" data-aos="fade-up">
//                 <h2>Why Shop With Us?</h2>
//                 <div className="features-grid">
//                     {features.map((feature, index) => (
//                         <div className="feature-card" key={index} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
//                             <div className="feature-icon">{feature.icon}</div>
//                             <h3>{feature.title}</h3>
//                             <p>{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//
//             {/* Products */}
//             <section className="products-section" data-aos="fade-up">
//                 <h2>Featured Products</h2>
//                 <div className="products-grid">
//                     {products.map((product, index) => (
//                         <div className="product-card" key={product.id} data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
//                             <div className="product-image">
//                                 <img src={product.image} alt={product.name} />
//                             </div>
//                             <div className="product-info">
//                                 <h3>{product.name}</h3>
//                                 <span className="product-category">{product.category}</span>
//                                 <p>{product.description}</p>
//                                 <div className="product-footer">
//                                     <span className="product-price">{product.price}</span>
//                                     <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="view-all-btn" onClick={() => navigate('/explore')}>View All Products</button>
//             </section>
//
//             {/* Testimonials */}
//             <section className="testimonials" data-aos="fade-up">
//                 <h2>What Our Customers Say</h2>
//                 <div className="testimonial-cards">
//                     <div className="testimonial-card" data-aos="fade-right">
//                         <p>"The checkout process was so smooth and my order arrived earlier than expected!"</p>
//                         <div className="author">- Jessica L., Premium Member</div>
//                     </div>
//                     <div className="testimonial-card" data-aos="fade-up">
//                         <p>"Excellent customer service and product quality. Will shop here again!"</p>
//                         <div className="author">- David M., Frequent Buyer</div>
//                     </div>
//                     <div className="testimonial-card" data-aos="fade-left">
//                         <p>"Best prices I've found online with fast shipping. Highly recommend!"</p>
//                         <div className="author">- Sarah K., Loyal Customer</div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Footer CTA */}
//             <section className="footer-cta" data-aos="fade-up">
//                 <h2>Ready to Experience Seamless Shopping?</h2>
//                 <div className="auth-buttons">
//                     <button className="primary-btn large" onClick={handleFreeTrial}>Login / Register</button>
//                     <button className="secondary-btn large" onClick={() => navigate('/about')}>About Us</button>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default Dashboard;
