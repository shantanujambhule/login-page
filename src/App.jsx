import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginScreen from './components/LoginScreen';
import Profile from './components/profile';
import SignUpScreen from './components/SignUpScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
