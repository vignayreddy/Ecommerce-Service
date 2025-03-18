import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE == "development" ? "http://localhost:5001/api" : "https://ecommerce-service-1wys.onrender.com/api" ,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;