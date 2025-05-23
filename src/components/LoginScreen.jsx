import React, { useState } from 'react';
import '../index.css';
import FloatingInput from './FloatingInput';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
 <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-[360px] border border-gray-200 h-[90vh] bg-white rounded-lg p-6 shadow-md bg-gradient-to-br from-purple-100 via-white to-purple-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sign in to your PopX account</h2>
        <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <FloatingInput label="Email Address" type="email" value={email} onChange={setEmail} />
        <FloatingInput label="Password" type="password" value={password} onChange={setPassword} />

        <button
        onClick={() => navigate('/profile')}
          className={`w-full mt-6 py-2 rounded-md font-medium ${
            email && password.length > 3
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-300 text-white '
          }`}
          disabled={!email || password.length <= 3}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
