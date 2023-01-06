import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://socialmedia-mernapp.onrender.com/api"
})