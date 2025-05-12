import React, {createContext, useEffect, useState} from "react";
import {fetchCategories} from "../service/CategoryService.js";
import {fetchItems} from "../service/ItemService.js";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [itemsData, setItemsData] = useState([]);
    const [auth, setAuth] = useState({token: null, role: null});
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? {...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem
                );
            } else {
                return [...prevItems, {...item, quantity: 1}];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? {...item, quantity: newQuantity}
                    : item
            )
        );
    };

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token") && localStorage.getItem("role")) {
                setAuth({
                    token: localStorage.getItem("token"),
                    role: localStorage.getItem("role")
                });
            }
            const response = await fetchCategories();
            const itemResponse = await fetchItems();
            setCategories(response.data);
            setItemsData(itemResponse.data);
        }
        loadData();
    }, []);

    const setAuthData = (token, role) => {
        setAuth({token, role});
    };

    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData,
        addToCart,
        cartItems,
        removeFromCart,
        updateQuantity,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};