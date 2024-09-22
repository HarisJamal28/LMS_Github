import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [courseCount, setCourseCount] = useState(0);

    const addCourses = (course) => {
        setCart((prevCart) => [...prevCart, course]);
    };

    const updateCourseCount = (count) => {
        setCourseCount(count);
    };

    const clearCart = () => {
        setCart([]);
        setCourseCount(0);
    };

    // Debugging: Log the context values to verify they're correct
    console.log({
        cart,
        courseCount,
        addCourses,
        updateCourseCount,
        clearCart
    });

    return (
        <MyContext.Provider value={{ cart, addCourses, updateCourseCount, clearCart, courseCount }}>
            {children}
        </MyContext.Provider>
    );
};
