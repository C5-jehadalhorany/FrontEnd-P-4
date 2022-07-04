import { tokenContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import './style.css';




export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { token, setToken, isLoggedIn, setIsLoggedIn } = useContext(tokenContext)
  const dataServer = () => {
    axios.post(("http://localhost:5000/login"), {
      email: email,
      password: password
    }).then((result) => {
      localStorage.getItem("token")
      // console.log(result.data.token);

      if (result) {

        navigate("/Dashboard")
        localStorage.setItem("token", result.data.token)
        console.log(result);
        setToken(result.data.token)
       
       
        localStorage.setItem("setIsLoggedIn",true)
        console.log(localStorage.getItem("setIsLoggedIn"));
      
      }
    }).catch((err) => {
      // console.log(err.response.data.message);
    })
  }
  return (
    <div className='alloflogin'>
      <div className='allOflog'>
      <h3 className='h3log'>Login</h3>
      <input className='inputlogin' type="email" placeholder='email'
        onChange={(e) => {
          setEmail(e.target.value)
        }} />

      <input  className='inputlogin' type="password" placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }} />
      <button className='buttonstylelogin' onClick={() => {
        dataServer()
        setIsLoggedIn(true)

      }}>Login</button>
      </div>
    </div>
  )
}

export default Login
