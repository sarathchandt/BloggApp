import axios from "axios";
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { api } from "../../api/api";

function PrivateRoutes() {
    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('userToken');
        console.log(token);
        const headers = { Authorization: `Bearer ${token}` };
        axios.get(`${api}checkLogin`, {headers}).then(res=>{
            
            setLogin(res?.data?.isLogin)

        }).catch(()=>{
           
            setLogin(false)
            navigate('/')
        })
    },[])
  return (
    isLogin ? <Outlet></Outlet> : navigate('/')
  )
}

export default PrivateRoutes