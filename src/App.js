
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/home/home'
import Login from './view/auth/login'
import Register from './view/auth/register'
import SidebarView from './view/home/sidebarView'
import './App.css'

import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [reister,setRegister] = useState(false);
  const [validate, setValidate] = useState('');
  let userLogged;

  // useEffect(() => {
  //   function checkUserData() {
  //     userLogged = localStorage.getItem("token");
  //   }
  // checkUserData();
  // }, []);
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/"  element={<SidebarView></SidebarView>}/>
          {/* <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} /> */}
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register setRegister={setRegister} setEmail={reister} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
