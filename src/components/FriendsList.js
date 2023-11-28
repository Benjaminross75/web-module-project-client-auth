import React,{useState, useEffect} from "react";
import axios from 'axios';
const FriendsList = () =>{
    const [friend, setFriend] = useState([])
    return(<div>
         <h2>Friends List</h2>
         <ul>
            <li>name - age - email</li>
            <li>name - age - email</li>
            <li>name - age - email</li>
         </ul>
    </div>)
    }

export default FriendsList
