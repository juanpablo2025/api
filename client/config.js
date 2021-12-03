import axios from "axios";

export const axiosInstance = axios.create({
	baseURL="https://maarketb2b.herokuapp.com/"
});
