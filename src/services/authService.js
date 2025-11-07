import apiClient from './apiClient';

const register = apiClient.register;
const login = apiClient.login;
const logout = apiClient.logout;
const getCurrentUser = apiClient.getCurrentUser;

export default {
 register,
 login,
 logout,
 getCurrentUser,
};