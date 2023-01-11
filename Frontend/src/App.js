import './App.css';
import Header from "./Components/Universal/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import Aboutus from './Components/About us/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Dashboard from './Components/Authentication/Dashboard';
import Cart from "./Components/Cart/Cart";
import Products from './Components/Product/Products';
import Footer from './Components/Universal/Footer';
function App() {
  return (
    <>
     <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/singleProducts/:id" element={<singleProducts/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
