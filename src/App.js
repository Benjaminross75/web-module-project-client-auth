import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Login = () =>{
  return(<div>
    <h1>Login</h1>
    <label
  </div>)
}


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/friends' element={<FriendsList/>}/>
      <Route path='/friends/add' element={<AddFriend/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </div>
  );
}

export default App;
