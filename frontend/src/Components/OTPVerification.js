import React, { useState } from 'react';
import axios from '../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      const res = await axios.post('/users/verify-otp', { email, otp });
      setMessage(res.data.message);
      setTimeout(() => {
        navigate('/'); // Redirect to login
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || 'OTP verification failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>OTP Verification</h2>
      <p>Please enter the OTP sent to your email: <b>{email}</b></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
        <button type="submit" disabled={loading || !otp} style={{ width: '100%' }}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>
      {message && <div style={{ color: 'green', marginTop: 10 }}>{message}</div>}
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
    </div>
  );
};

export default OTPVerification; 