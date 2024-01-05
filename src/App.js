import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
//import pages
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const {user, authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&( 
      <BrowserRouter>
      {user&&<Sidebar/>}
          <div className='container'>
            <Navbar/>
            <Routes>
                  <Route path="/" element={user?<Dashboard />:<Login/>} />
                  <Route path="/Login" element={!user?<Login />:<Dashboard />} />
                  <Route path="/Signup" element={!user?<Signup />:<Dashboard/>} />
                  <Route path="/Project" element={user?<Project />:<Login/>} />
                  <Route path="/Create" element={user?<Create />:<Login/>} />
            </Routes>
          </div>
          
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
