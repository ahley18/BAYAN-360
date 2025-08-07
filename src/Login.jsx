import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './dataLogin/login';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Load saved credentials if Remember Me was used
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
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            {/* Left Panel */}
            <div style={{
                flex: 1,
                background: '#dc2626',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome back!</h1>
                <p style={{ textAlign: 'center', maxWidth: '300px' }}>
                    Log in to access your account and manage your dashboard.
                </p>
            </div>

            {/* Right Panel */}
            <div style={{
                flex: 1,
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                color: '#1f2937'
            }}>
                <form
                    onSubmit={handleSubmit}
                    style={{ width: '100%', maxWidth: '400px' }}
                >
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '600' }}>Log In</h2>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username or Email</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #d1d5db',
                                backgroundColor: '#f9fafb',
                                color: '#111827'
                            }}
                            autoComplete="username"
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: '1px solid #d1d5db',
                                backgroundColor: '#f9fafb',
                                color: '#111827'
                            }}
                            autoComplete="current-password"
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            /> Remember me
                        </label>
                        <a href="#" style={{ color: '#dc2626', textDecoration: 'none' }}>Forgot password?</a>
                    </div>

                    {error && <div style={{ color: '#dc2626', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                    <button type="submit" style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '20px',
                        border: 'none',
                        background: '#dc2626',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
