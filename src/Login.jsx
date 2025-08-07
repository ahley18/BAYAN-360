import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './dataLogin/login';
import './dataLogin/login.css';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('rememberMeData'));
        if (saved?.username && saved?.password) {
            setForm({ username: saved.username, password: saved.password });
            setRememberMe(true);
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (u) =>
                (u.username === form.username || u.email === form.username) &&
                u.password === form.password
        );

        if (!form.username || !form.password) {
            setError('Please enter both username and password.');
            return;
        }

        if (!user) {
            setError('Incorrect username or password.');
            return;
        }

        if (rememberMe) {
            localStorage.setItem('rememberMeData', JSON.stringify(form));
        } else {
            localStorage.removeItem('rememberMeData');
        }

        navigate('/dashboard');
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
                        <label htmlFor="username">Username or Email</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
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
