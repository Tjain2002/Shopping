import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from "./App";
import { Store } from "./redux/Store";
import "./index.css";
import { Toaster } from "react-hot-toast";
// import {ToastContainer} from 'react-toastify';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
{/* <ToastContainer> */}
<Provider store={Store}>
  <App />
  <Toaster></Toaster>
  </Provider>


{/* </ToastContainer> */}

</BrowserRouter>
 
  
  
);
