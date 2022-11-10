import React from 'react';
import { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import './Formsignup.css';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
 
  const [name, setName] = React.useState('');
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  

 
 
  const handelSinup = async () =>{
  let result = await fetch("https://ixonotest.herokuapp.com/api/User/submit-profile",{
    method:'POST',
    body:JSON.stringify({name,username,email,password}),
    headers:{'Content-Type': 'application/json'}
    
  });

  result = await result.json();
  console.warn(result)
  





}

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          sign up form
        </h1>
        <div className='form-inputs'>
          <label className='name'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>


          <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* <div className='form-inputs'>
          <label className='form-label'>phone Number</label>
          <input
            className='form-input'
            type='text'
            placeholder='number'
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div> */}
        <div className='form-inputs'>
          <label className='number'>Mobilen number</label>
          <input
             className='form-input'
             type='text'
             placeholder='Mobile number'
             value={values.number}
             onChange={handleChange}
             />
             {errors.number && <p>{errors.number}</p>}
             </div>
        <button className='form-input-btn'>sign up
          
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
    
  );
};

export default FormSignup;