import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:5001/api" ,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;