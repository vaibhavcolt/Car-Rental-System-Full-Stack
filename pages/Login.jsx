import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // External CSS for styling
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const nav = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post("http://localhost:8080/loginuser", formData);
      nav('/');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Login successful:', formData);
      // You can redirect or call backend API here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit" className='btn-cancle'>Login</button>
        <Link to='/'><button className='btn-cancle'>Cancle</button></Link>
      </form>
    </div>
  )
}

export default Login