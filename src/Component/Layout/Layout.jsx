import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet , useNavigate } from 'react-router-dom'

export default function Layout({userDate , setuserDate}) {

let navigate = useNavigate();

  function logout(){

    localStorage.removeItem('userToken');
    setuserDate(null);
    navigate('/login');

      
  }
  return (
   
  <>
  <Navbar logout={logout} userDate={userDate}/>
  <div className='container'>
    
  <Outlet>
    
  </Outlet>
  </div>
 

  </>
  )
}
