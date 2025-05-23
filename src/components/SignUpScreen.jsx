import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-[400px] bg-white border border-gray-200 rounded-lg p-6 shadow-md bg-gradient-to-br from-purple-100 via-white to-purple-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Create your <br /> PopX account</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Full Name<span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Phone number<span className="text-red-500">*</span></label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Email address<span className="text-red-500">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Password<span className="text-red-500">*</span></label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">Company name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
            <div className="flex items-center gap-6">
              <label className="flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>

              <label className="flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={() => handleRadioChange('no')}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
          onClick={() => navigate('/login')}
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
