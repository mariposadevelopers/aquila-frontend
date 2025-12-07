import axios from "axios";
import API_BASE_URL from '../../config/apiConfig.js';


export const loginRequest = async (user) => {
    return await axios.post(`${API_BASE_URL}/api/auth/login`, user, { withCredentials: true });
}

export const logoutRequest = async () => {
    return await axios.post(`${API_BASE_URL}/api/auth/logout`, null,{ withCredentials: true });
}

export const verifyTokenRequest = async () => {
    return await axios.get(`${API_BASE_URL}/api/auth/verify`, {withCredentials: true })
}