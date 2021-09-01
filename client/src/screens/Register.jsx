import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className='register-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3 className='register-title'>Register</h3>
      <div className='username-div-register'>
      <label >
        Username
      </label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className='email-div'>
      <label>
        Email
      </label>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='password-div-register'>
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
      <button className='register-submit'>Submit</button>
    </form>
  );
}