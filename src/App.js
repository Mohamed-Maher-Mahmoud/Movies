import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import Tv from './Component/Tv/Tv'
import Movies from './Component/Movies/Movies'
import People from './Component/People/People'
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile';
import Error from './Component/Error/Error';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import { Offline} from 'react-detect-offline';
import MediaContextProvider from './Component/Context/Context';






function App() {

  useEffect(()=> {

    if(localStorage.getItem('userToken') !== null) {

      saveUserData();
    }

  } , [])


  const [userDate , setuserDate] = useState(null);
  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken); 
    setuserDate(decodedToken);
  }

  let routers = createBrowserRouter([
    {path:'/' , element:<Layout setuserDate={setuserDate} userDate={userDate}/> , children:[
  
    {index:true , element:<ProtectedRoute userDate={userDate}><Home/></ProtectedRoute> },
    {path:'people' , element:<ProtectedRoute userDate={userDate}><People/></ProtectedRoute>},
    {path:'tv' , element:<ProtectedRoute userDate={userDate}><Tv/></ProtectedRoute>},
    {path:'profile' , element:<ProtectedRoute userDate={userDate}><Profile userDate={userDate}/></ProtectedRoute>},
    {path:'movies' , element:<ProtectedRoute userDate={userDate}><Movies/></ProtectedRoute>},
    {path:'itemdetails/:id/:media_type' , element:<ProtectedRoute userDate={userDate}><ItemDetails/></ProtectedRoute>},
    {path:'login' , element:<Login saveUserData={saveUserData}/>},
    {path:'register' , element:<Register/>},
    {path:'*' , element:<Error/>}
  
  
    ]}
  ])
return <>

<Offline> <div className='offline'>You Are Offline </div> </Offline>

<MediaContextProvider>
  <RouterProvider router={routers}/>
</MediaContextProvider>


</>




}

export default App;


/*
 
let routers = createBrowserRouter([
  {path:'/' , element:<Layout setuserDate={setuserDate} userDate={userDate}/> , children:[

  {index:true , element:<ProtectedRoute userDate={userDate}><Home/></ProtectedRoute> },
  {path:'people' , element:<ProtectedRoute userDate={userDate}><People/></ProtectedRoute>},
  {path:'tv' , element:<ProtectedRoute userDate={userDate}><Tv/></ProtectedRoute>},
  {path:'profile' , element:<ProtectedRoute userDate={userDate}><Profile userDate={userDate}/></ProtectedRoute>},
  {path:'movies' , element:<ProtectedRoute userDate={userDate}><Movies/></ProtectedRoute>},
  {path:'itemdetails/:id/:media_type' , element:<ProtectedRoute userDate={userDate}><ItemDetails/></ProtectedRoute>},
  {path:'login' , element:<Login saveUserData={saveUserData}/>},
  {path:'register' , element:<Register/>}


  ]}
])
*/