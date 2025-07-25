import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-loginBg animate-fade-in">
      <div className="bg-loginCard p-10 shadow-2xl rounded-2xl w-full max-w-md border border-gray-100 animate-pop-in transition-all duration-500">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-loginAccent rounded-full p-3 mb-2 shadow-md transition-transform duration-300 hover:scale-110">
            {/* You can replace this with a logo image if you have one */}
            <svg className="w-10 h-10 text-loginPrimary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-loginPrimary mb-1 transition-colors duration-300">Sign In</h2>
          <p className="text-loginMuted text-sm animate-fade-in delay-200">Welcome back! Please login to your account.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-loginAccent text-loginText bg-gray-50 placeholder-loginMuted transition-all duration-300 focus:scale-105"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-loginAccent text-loginText bg-gray-50 placeholder-loginMuted transition-all duration-300 focus:scale-105"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-loginPrimary hover:bg-loginAccent text-white font-bold py-3 rounded-lg transition duration-200 shadow-md hover:scale-105"
          >
            Login
          </button>
        </form>
        {message && (
          <p
            className={`mt-6 text-center font-semibold animate-fade-in ${
              message.includes('successful') ? 'text-green-600' : 'text-loginError'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
