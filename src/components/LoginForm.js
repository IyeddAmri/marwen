import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ include useNavigate
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ create navigate instance

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      alert('Logged in successfully!');
      navigate('/dashboard'); // ✅ redirect to dashboard
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login to Your Account</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span 
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="form-footer">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
