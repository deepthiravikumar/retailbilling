import axios from "axios";

export const login = async (data) =>{
    return await axios.post("http://localhost:5000/api/v1.0/login", data)
}

const API_URL = "http://localhost:5000/api/v1.0";

// Set up axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add request interceptor to include token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const AuthService = {
    login: async (credentials) => {
        try {
            const response = await api.post("/login", credentials);
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: "Login failed" };
        }
    },

    signup: async (userData) => {
        try {
            const response = await api.post("/signup", userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: "Signup failed" };
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },

    getCurrentUser: () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },

    refreshToken: async () => {
        try {
            const response = await api.post("/refresh-token");
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || { message: "Token refresh failed" };
        }
    },
};

export default AuthService;