import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://socialmedia.onrender.com/api"
})