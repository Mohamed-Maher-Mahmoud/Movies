import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({userDate , logout}) {
  return <>
    <nav className='d-flex justify-content-between flex-md-row flex-column px-2'>
      <div className='left-nav flex-md-row flex-column d-flex align-items-center'>
        <h1 className='m-0'>Noxe</h1>

  {userDate? <ul className='list-unstyled d-flex flex-md-row flex-column align-item-center px-3  m-0'>
          
          <li className='px-2'><Link to='/'>Home</Link></li>
          <li className='px-2'><Link to='movies'>Movies</Link></li>
          <li className='px-2'><Link to='tv'>Tv</Link></li>
          <li className='px-2'><Link to='people'>People</Link></li>

        </ul>:''}      
      </div>

     <div className='right-nav flex-md-row flex-column d-flex align-items-center'>

    <div className='social-media'>
        <i className='fab mx-1 fa-facebook'></i>
        <i className='fab mx-1 fa-instagram'></i>
        <i className='fab mx-1 fa-twitter'></i>
        <i className='fab mx-1 fa-spotify'></i>
        <i className='fab mx-1 fa-youtube'></i>
    </div>

        <ul className='list-unstyled flex-md-row flex-column d-flex align-items-center m-0'>
          
{ 
          userDate? <>
          
          <li className='px-2 cursor-pointer' onClick={logout}><span>Logout</span></li>
          <li className='px-2'><Link to='profile'>Profile</Link></li>
          </>:<>
          <li className='px-2'><Link to='login'>Login</Link></li>
          <li className='px-2'><Link to='register'>Register</Link></li> 
          </>
}          

        </ul>

      </div>

    </nav>
    </>
}
