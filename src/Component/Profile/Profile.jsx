import React from 'react'

export default function Profile({userDate}) {
    let {first_name , last_name , age , email} = userDate;
  return <>

  <h4>Name : {first_name}  {last_name}</h4>
  <h4>Age : {age} </h4>
  <h4>Email : {email} </h4>
 
  </>
}
