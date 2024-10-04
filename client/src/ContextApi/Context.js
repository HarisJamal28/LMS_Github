import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [courseCount, setCourseCount] = useState(0);
    const [user, setUser] = useState(null);

    const addCourses = (course) => {
        setCart((prevCart) => [...prevCart, course]);
    };

    const updateCourseCount = (count) => {
        setCourseCount(count);
    };

    // Fetch user profile data
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axiosInstance.get("/api/users/profile");
                setUser(response.data.user);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <MyContext.Provider value={{ cart, addCourses, updateCourseCount, courseCount, user }}>
            {children}
        </MyContext.Provider>
    );
};

