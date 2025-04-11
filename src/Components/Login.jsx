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

    // Fake login (no API)
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      toast.success("login sccessfully");
     
      navigate('/');
    } else {
      alert('Please enter both fields');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
<div className='mt-6'>     


<Link to="/">
<button>Skip</button>

</Link>

     {/* <Navlink ></Navlink> */}
    

</div>

    </div>
  );
};

export default Login;
