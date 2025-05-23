import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const navigate = useNavigate();
  const user = {
    fullName: 'Shantanu ',
    phone: '+91 8698957712',
    email: 'www.sjambhule321best@example.com',
    company: 'PopX Agency',
    isAgency: 'Yes',
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-[400px] h-[90vh] bg-white border border-gray-200 rounded-lg p-6 shadow-md bg-gradient-to-br from-purple-100 via-white to-purple-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Account Details
        </h2>

        <div className="space-y-4 text-sm">
          <div>
            <label className="block text-gray-500 mb-1">Full Name</label>
            <p className="font-medium text-gray-900">{user.fullName}</p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Phone Number</label>
            <p className="font-medium text-gray-900">{user.phone}</p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Email Address</label>
            <p className="font-medium text-gray-900">{user.email}</p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Company</label>
            <p className="font-medium text-gray-900">{user.company}</p>
          </div>

          <div>
            <label className="block text-gray-500 mb-1">Are you an Agency?</label>
            <p className="font-medium text-gray-900">{user.isAgency}</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition">
          Edit Profile
        </button>
        <button 
        onClick={() => navigate('/')}
        className="mt-6 w-full bg-purple-500 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
