import { useEffect, useState } from "react";
import { axiosInstance } from "../config";

export const useFetchData = (url)=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchdata = async ()=>{
            const res = await axiosInstance.get(url)
            setData(res.data);
            console.log(res.data)
        } 
        fetchdata();
    },[url]);

    if(data!==[]){
        return {data};
    }
}
