// import logo from './logo.svg';
import './App.css';
import Navbar  from './component/Navbar';
import Footer from './component/Footer';
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import { Home } from './pages/Home';


function App() {

  return (

  <>
  
  <BrowserRouter> 

  <Navbar/>
  <Routes>
    <Route  path='/'  element={<Home/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route  path='/signup'  element={<SignUp/>}/>
    <Route  path='/courses'  element={<Product/>}/>


{/* <PaymentForm/> */}

</Routes>
<Footer/>
</BrowserRouter>

  </>
  
  );
}

export default App;
