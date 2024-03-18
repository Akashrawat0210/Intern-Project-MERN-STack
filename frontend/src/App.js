// import logo from './logo.svg';
import './App.css';
import Navbar  from './component/Navbar';
import Footer from './component/Footer';
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Product from './pages/Product';


function App() {

  return (

  <>
  
  <BrowserRouter> 

  <Navbar/>
  <Routes>

<Login/>
<SignUp/>
<Product/>

<Footer/>
{/* <PaymentForm/> */}

</Routes>
</BrowserRouter>

  </>
  
  );
}

export default App;
