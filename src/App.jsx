import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
const App = () => {
  return (
    <div className="max-h-full">
  <div className="">
  <Navbar  >
    </Navbar>  

  </div>

    <Routes>
     

      <Route path='/' element={<Home></Home>}></Route>
      <Route  path='/cart' element={<Cart></Cart>} ></Route>
      <Route  path='/login' element={<Login></Login>}></Route>
    </Routes>


    </div>

  




  );

};

export default App;
