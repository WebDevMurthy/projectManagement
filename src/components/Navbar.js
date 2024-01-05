import './Navbar.css';
import temple from '../assets/temple.svg';
import React from 'react';
import {Link, Navigate, Route} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Dashboard from '../pages/Dashboard/Dashboard';

export default function Navbar() {  

  const {logout, isPending} = useLogout()
 const {user} = useAuthContext()

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
            <img src={temple} alt='logo' />
            <span>The Dojo</span>
        </li>
        {!user&&(
          <>
            <li><Link to='/Login'>Login</Link></li>
            <li><Link to='/Signup'>Signup</Link></li>
          </>
            )}

      {user&&(
        <li>
        {!isPending&&    <button className='btn' onClick={logout}>Log out</button>}
        {isPending&&    <button className='btn' disabled>Logging out...</button>}
        </li>
        )}
      </ul>
    </div>
  );
}
