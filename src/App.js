import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';




function App() {
  return (

    <div className="App">
      <h1>Friends Database</h1>
      <header>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='/friends'>FriendsList</Link>
        <Link className='link' to='/friends/add'>Add Friend</Link>
        <Link className='link' to='/logout'>Logout</Link>
      </header>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/friends' element={<FriendsList/>}/>
        <Route path='/friends/add' element={<AddFriend/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
