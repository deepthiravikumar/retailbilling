import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../service/AuthService';
import './Signup.css';

const Signup = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setError('Passwords do not match');
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
            return;
        }

        setLoading(true);
        setError('');
        setIsAnimating(false);

        try {
            await AuthService.signup({
                name: userData.name,
                email: userData.email,
                password: userData.password
            });
            navigate('/login');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className={`auth-container ${isAnimating ? 'shake' : ''}`}>
                <div className="auth-header">
                    <h2>Create Your Account</h2>
                    <p>Join us to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && (
                        <div className="error-message">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            {error}
                        </div>
                    )}

                    <div className="form-group floating">
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="auth-input"
                        />
                        <label>Full Name</label>
                    </div>

                    <div className="form-group floating">
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="auth-input"
                        />
                        <label>Email Address</label>
                    </div>

                    <div className="form-group floating">
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            minLength="6"
                            className="auth-input"
                        />
                        <label>Password</label>
                    </div>

                    <div className="form-group floating">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            minLength="6"
                            className="auth-input"
                        />
                        <label>Confirm Password</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`auth-button ${loading ? 'loading' : ''}`}>
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Creating Account...
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    <div className="auth-footer">
                        <p className="auth-link">
                            Already have an account?{' '}
                            <span onClick={() => navigate('/login')}>Login here</span>
                        </p>
                    </div>
                </form>
            </div>

            <div className="auth-decoration">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
        </div>
    );
};

export default Signup;