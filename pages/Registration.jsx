import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // External CSS for styling
import { Link, useNavigate } from 'react-router-dom';
const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/user", formData);
      nav('/');
    } catch {
      console.error('Error during registration:');
    }
  }


  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.password.length < 2) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Register</h2>

      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      {errors.name && <span className="error">{errors.name}</span>}

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}
      <label>Phone Number</label>
      <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}



      <label>Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <span className="error">{errors.password}</span>}

      <label>Confirm Password</label>
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

      <button type="submit" className='btn-cancle'>Register</button>
      <Link to='/'><button className='btn-cancle'>Cancle</button></Link>
    </form>

  )
}

export default Registration
