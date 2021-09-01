import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
  const [formData, SetFormData] = useState({
    username: '',
    password: ''
  })

  const {handleLogin} = props  

  const handleChange = (e) => {
    const { name, value } = e.target
    SetFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}>
      <h3 className='login-title' >Login</h3>
      <div className='username-div'>
      <label>
          Username
        </label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        /> 
      </div>
      <div className='password-div'>
      <label>
          Password
        </label>
        <input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange} 
        />
        
      </div>

      <Link className='register-link' to='/register'>Register</Link>
      <button className='submit-button' >Submit</button> 
    </form>
  )
}