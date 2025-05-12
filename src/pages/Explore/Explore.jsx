import './Explore.css';
import {AppContext} from "../../context/AppContext.jsx";
import React, {useContext} from "react";
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../components/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";

const Explore = () => {
    // Gadget categories data
    const sampleCategories = [
        { id: 1, name: "Smartphones" },
        { id: 2, name: "Laptops" },
        { id: 3, name: "Headphones" },
        { id: 4, name: "Smart Watches" },
        { id: 5, name: "Accessories" }
    ];

    // Gadget products data with image URLs
    const sampleProducts = [
        { id: 1, name: "iPhone 15 Pro", price: 134900, category: "Smartphones", description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096" },
        { id: 2, name: "Samsung Galaxy S23", price: 84999, category: "Smartphones", description: "6.1-inch Dynamic AMOLED, Snapdragon 8 Gen 2, 50MP camera", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_C1pV-9QDqqeGzgjkMI9ga0YMTA9WZBLAcfGG4QLTGzGcVMhYgX4uTZiV7HDq58OzGrsI84i3v9qfQW2H77my9Y73JE5KE0nH3Okl6NOhuOto7csHuiRDo1c" },
        { id: 3, name: "Google Pixel 7", price: 59999, category: "Smartphones", description: "6.3-inch OLED, Google Tensor G2, 50MP main camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p9jo5GIUgO-3TQjKipixu2Dys2UvQkno3A&s" },
        { id: 4, name: "MacBook Pro 14\"", price: 194900, category: "Laptops", description: "M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display", image: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg" },
        { id: 5, name: "Dell XPS 15", price: 159990, category: "Laptops", description: "15.6\" 4K UHD+, Intel Core i7, 16GB RAM, 512GB SSD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaTKLN4dLtsmi8ZmHbX1KAxNfJEISlM-Y9A&s" },
        { id: 6, name: "HP Spectre x360", price: 139999, category: "Laptops", description: "13.5\" 3K2K OLED, Intel Core i7, 16GB RAM, 1TB SSD", image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07962448.png" },
        { id: 7, name: "Sony WH-1000XM5", price: 28990, category: "Headphones", description: "Industry-leading noise cancellation, 30-hour battery life", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm-hhV5HNht3GGhQkc0dAIG8l7pz31qOaVw&s" },
        { id: 8, name: "AirPods Pro (2nd Gen)", price: 24900, category: "Headphones", description: "Active Noise Cancellation, Adaptive Transparency, Spatial Audio", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnUlFjVDCyQvERh7RLFo2SKDqK7hx8bv4Pg&s" },
        { id: 9, name: "Bose QuietComfort 45", price: 28900, category: "Headphones", description: "World-class noise cancellation, 24-hour battery life", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhORDJwDT_s2pzuU71shjqyU89t2Efrss0w&s" },
        { id: 10, name: "Apple Watch Series 8", price: 45900, category: "Smart Watches", description: "45mm GPS, Always-On Retina display, ECG app", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJWtYS40yK6hYKSKfrIz-fbEkZW4F0Uzc9w&s" },
        { id: 11, name: "Samsung Galaxy Watch 5", price: 27999, category: "Smart Watches", description: "40mm Bluetooth, BioActive Sensor, Sleep Coaching", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KyJMbDUDSuCbfYypIEPdUpcgQ23NFVSQLw&s" },
        { id: 12, name: "Fitbit Sense 2", price: 29990, category: "Smart Watches", description: "Advanced health metrics, Stress management, GPS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRQ0jVCsGTOqc4fB-xspx8X0yJpPH-RDRLA&s" },
        { id: 13, name: "Anker PowerCore 20K", price: 2499, category: "Accessories", description: "20000mAh portable charger, USB-C PD, 3 ports", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGjibe1z_5F4n9sV3lxha1u2ENoIP4gJMmQ&s" },
        { id: 14, name: "Logitech MX Master 3S", price: 9999, category: "Accessories", description: "Wireless mouse, 8K DPI, MagSpeed scrolling", image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1" },
        { id: 15, name: "Samsung T7 SSD 1TB", price: 8999, category: "Accessories", description: "Portable SSD, USB 3.2 Gen 2, 1050MB/s read speed", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyK4LEq7ACsxmoG0jV-URrcsPMyj96keX9jw&s" }
    ];

    const context = useContext(AppContext);
    const categories = context?.categories || sampleCategories;
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [customerName, setCustomerName] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState("");

    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? sampleProducts.filter(product => product.category === selectedCategory)
        : sampleProducts;

    return (
        <div className="explore-container text-light">
            <div className="left-column">
                <div className="second-row" style={{overflowY: "auto"}}>
                    <DisplayItems products={filteredProducts} />
                </div>
            </div>
            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{height:'20%'}}>
                    <CustomerForm
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setMobileNumber={setMobileNumber}
                        setCustomerName={setCustomerName}
                    />
                </div>
                <div className="cart-summary-container" style={{height:'40%'}}>
                    <CartSummary
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setMobileNumber={setMobileNumber}
                        setCustomerName={setCustomerName}
                    />
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-items-container" style={{height:'55%',overflowY: 'auto'}}>
                    <CartItems/>
                </div>
            </div>
        </div>
    )
}

export default Explore;