import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [massage, setMassage] = useState("")

  const dataServer = () => {
    axios.post(("http://localhost:5000/users/register"), {
      name: name,
      age: age,
      email: email,
      password: password
    }).then((result) => {
      console.log(result);
      setMassage(result);
      navigate("/Login")

    }).catch((err) => {
      setMassage(err.response.data.message);
    })
  }


  return (
    <div className='divallreggister'>
  < div className='allOfResiter'>
      <h3 className='h3register'>Register</h3>
      <input className='allinputR' type="text" placeholder='name'
        onChange={(e) => {
          setName(e.target.value)
        }} />

      <input className='allinputR' type="text" placeholder='age'
        onChange={(e) => {
          setAge(e.target.value)
        }} />

      <input className='allinputR' type="email" placeholder='email'
        onChange={(e) => {
          setEmail(e.target.value)
        }} />

      <input className='allinputR' type="password" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }} />

      <button className='buttonR' onClick={dataServer}>Register</button>

      <h3 className='h3register'>
        massage{massage}
      </h3>
      </div>
    </div>

  )
}

export default Register