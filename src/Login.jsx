import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dataLogin/login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('rememberMeData'));
    if (saved?.email && saved?.password) {
      setForm({ email: saved.email, password: saved.password });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Incorrect email or password.');
        } else {
          setError('Login failed. Please try again.');
        }
        return;
      }

      const data = await response.json();
      // You can store token or user info here if backend returns it
      // e.g. localStorage.setItem('token', data.token);

      if (rememberMe) {
        localStorage.setItem('rememberMeData', JSON.stringify(form));
      } else {
        localStorage.removeItem('rememberMeData');
      }

      navigate('/dashboard');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <h1>Welcome back!</h1>
        <p>Log in to access your account and manage your dashboard.</p>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Log In</h2>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{' '}
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
