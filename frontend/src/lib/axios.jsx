import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://ecommerce-service-1wys.onrender.com/api" ,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;