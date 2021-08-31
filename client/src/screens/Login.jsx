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
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        </label>
      </div>
      <div className='password-div'>
      <label>
        Password:
        <input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange} 
        />
        </label>
      </div>

      <Link to='/register'>Register</Link>
      <button>Submit</button> 
    </form>
  )
}