import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://unitax-tour-server-main.vercel.app'
});

const useAxiosSecure = () => {

  return axiosSecure;
};

export default useAxiosSecure;