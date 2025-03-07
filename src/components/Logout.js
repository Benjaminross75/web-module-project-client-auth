import React,{useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.post("http://localhost:9000/api/logout",{},{
            headers:{
                authorization: token
            }
        })
        .then(res =>{
            localStorage.removeItem('token')
            navigate('/login')
        })
        .catch(err => console.error(err))
    },[])
    return(<div>
        <h2>Logout</h2>
    </div>)
  }
export default Logout
