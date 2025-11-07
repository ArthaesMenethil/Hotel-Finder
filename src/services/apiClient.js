import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; 

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

apiClient.interceptors.request.use(config => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

/**
* @param {Object} filters - Объект фильтров
 * @returns {Array} Список базовых данных отелей
 */

const getHotels = async (filters = {}) => {
    try {
        const response = await apiClient.get('/hotels', { params: filters });
        return response.data;
    } catch (error) {
        console.error("Error fetching hotels:", error.response?.data || error.message);
        throw error;
    }
};



const register = async (username, password) => {
    return apiClient.post('/register', { username, password });
};

const login = async (username, password) => {
    try {
        const response = await apiClient.post('/login', { username, password });
        const data = response.data;
        
        if (data.token) {
            localStorage.setItem('user', JSON.stringify(data)); 
        }
        return data;

    } catch (error) {
        const errorMessage = error.response?.data?.error || 'Login failed';
        throw new Error(errorMessage);
    }
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};


export default {
    getHotels,
    register,
    login,
    logout,
    getCurrentUser,
};