import '../index.css';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-end justify-center my-4 w-[360px] border border-gray-200 h-[90vh] bg-white rounded-lg p-6 shadow-md bg-gradient-to-br from-purple-100 via-white to-purple-200'>
      <div className='text-start w-full max-w-sm pb-10 animate-fadeIn'>
        <h1 className='text-2xl font-semibold text-gray-900 mb-2 transition-transform duration-300 hover:scale-105 hover:text-purple-600 animate-fadeSlideUp'>Welcome to PopX</h1>
        <p className='text-sm text-gray-500 mb-6 animate-fadeSlideUp delay-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quidem!</p>
        <div className='space-y-3'>
        <button onClick={() => navigate('/signup')} className='w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition'>Create Account</button>
        <button onClick={() => navigate('/login')} className='w-full bg-purple-200 text-purple-800 py-2 rounded-md font-medium hover:bg-purple-300 transition'>Already Registered? Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
