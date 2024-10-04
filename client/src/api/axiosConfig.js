// src/api/axiosConfig.js

import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            console.log('Access token expired. Attempting to refresh...');
            originalRequest._retry = true;

            const token = localStorage.getItem('token'); // Get current access token
            const decoded = jwtDecode(token); // Decode to get user ID
            
            if (!decoded || !decoded.userId) {
                alert('NO USER ID')
                window.location.href = '/'; // Redirect if userId is not available
                return;
            }

            try {
                const refreshResponse = await axios.post('/api/users/refresh-token', { userId: decoded.userId });
                
                if (refreshResponse.data.success) {
                    console.log('Successfully refreshed access token.');
                    localStorage.setItem('token', refreshResponse.data.accessToken); // Save under 'token'
                    originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                window.location.href = '/'; // Redirect to login or home page
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
