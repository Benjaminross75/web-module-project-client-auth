import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () =>{
if(!localStorage.getItem('token')){
    return <Navigate to='/login'/>
} else{
    return <Outlet/>
}
}
export default PrivateRoute
