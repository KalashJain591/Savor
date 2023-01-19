import './App.css';
import Header from "./Components/Universal/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import Aboutus from './Components/About us/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Dashboard from './Components/Authentication/Dashboard';
import Cart from "./Components/Cart/Cart";
import Products from './Components/Product/Products';
import Footer from './Components/Universal/Footer';
import CheckoutForm from './Components/Checkout/CheckoutForm';
import SingleProduct from "./Components/Product/SingleProduct/SingleProduct"
import UserDashboard from './Components/UserDashboard/UserDashboard';
import WishList from './Components/WishList/WishList';
import { useContext } from 'react';
import AuthContext from './Context/auth_context';
import Orders from './Components/UserDashboard/orders';
import Account from './Components/UserDashboard/Account';
import Adminpanel from './Components/AdminPanel/Adminpanel';
import Error404 from './Components/Error404';
import { useEffect } from 'react';
function App() {
  const { loggedIn } = useContext(AuthContext);
  
  // Scroll top when location changes
  const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 // 

  return (
    <>
     <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
          <Route path="/wishList" element={<WishList/>}/>
          <Route path="/login" element={loggedIn ? <Dashboard/>:<Login/>}/>
          <Route path="/register" element={loggedIn ? <Dashboard/>:<Register/>}/>
          <Route path="/dashboard" element={loggedIn ?<Dashboard/>:<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path ="/cart/checkout" element={<CheckoutForm/>}/>
          <Route path ="/UserDashboard" element={loggedIn ?<UserDashboard/>:<Login/>}/>
          <Route path ="/UserDashboard/cart" element={<Cart/>}/>
          <Route path ="/UserDashboard/orders" element={<Orders/>}/>
          <Route path ="/UserDashboard/account" element={<Account/>}/>
          <Route path ="/adminpanel" element={<Adminpanel/>}/>
          <Route path='*' element={<Error404 />}/>
     
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
