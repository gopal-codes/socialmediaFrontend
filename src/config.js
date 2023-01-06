import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://socialmedia_mernapp.onrender.com/api"
})