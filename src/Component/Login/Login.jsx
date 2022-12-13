import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Joi  from 'joi';



export default function Login({saveUserData}) {


let navigate = useNavigate();
const [errorList , seterrorList] = useState([]);
const [error , setError] = useState('')
const [isLoading , setisLoading] = useState(false)
  const [user , setUser] = useState({

    email:'',
    password:''

  })


  function getUserDate(eventInfo){
  
  let myUser = {...user};
  myUser[eventInfo.target.name] = eventInfo.target.value;
  setUser(myUser);
  console.log(myUser);
  }

async function sendRigisterDataToApi(){
let {data} = await axios.post(`https://route-movies-api.vercel.app/signin` , user); 
  if(data.message === 'success'){

    setisLoading(false);
    localStorage.setItem('userToken' , data.token);
    saveUserData();
    navigate('/')
  }
  else {
    setisLoading(false);
    setError(data.message)
  }
  }

  function submitLoginForm(e){
    setisLoading(true);
    e.preventDefault();
   let validation = validateLoginForm();

   if(validation.error){

    setisLoading(false); 
    seterrorList(validation.error.details)
   }

  else {
      sendRigisterDataToApi();
    }
  
  }

  function validateLoginForm(){ 
  let schema= Joi.object({
      email:Joi.string().email({minDomainSegments:2 , tlds:{allow:['com' , 'net']}}).required(),
      password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/)

    });
  return schema.validate(user , {abortEarly:false}); 

  }


  return <>

  {errorList.map((err , index)=> {
if(err.context.label === 'password') {
  return <div className='alert alert-danger my-2'>Password Invalied</div>
}
else {
  return <div className='alert alert-danger my-2'>{err.message}</div>

}
  })}
{error.length>0?<div className='alert alert-danger my-2'>{error}</div>:('')}


  <form onSubmit={submitLoginForm} > 
    <label htmlFor='email'>email :</label>
    <input onChange={getUserDate} type='email' className='form-control my-input my-2' name='email' id='email'></input>
    <label htmlFor='password'>password :</label>
    <input onChange={getUserDate} type='password' className='form-control my-input my-2' name='password' id='password'></input>
  
  <button type='submit' className='btn btn-info'>
    {isLoading === true? <i className='fas fa-spinner fa-spin'></i>:'Login'}
  </button>
  </form>
  </>
}
