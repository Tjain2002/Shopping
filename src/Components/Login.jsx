// src/pages/Login.js
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate ,Link} from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
    
      // Dispatch event to notify Navbar
      window.dispatchEvent(new Event("loginStatusChanged"));
    
      toast.success("login successfully");
      navigate('/');
    }
    
    // Fake login (no API)
   else {
      alert('Please enter both fields');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
  
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Login
        </button>
      </form>
  
      <div className="mt-4 text-center">
        <Link to="/">
          <button className="text-blue-600 hover:underline">Skip</button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default Login;
