import './App.css';
import Header from "./Components/Universal/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes,useLocation, useNavigate } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import Aboutus from './Components/About us/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
// import Dashboard from './Components/Authentication/Dashboard';
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
import Error404 from './Components/Error404';
import { useEffect } from 'react';
// import Index from './Components/AdminPanel/HomePage/Index';
import Inventory from './Components/AdminPanel/Pages/Inventory';
import Dashboard from './Components/AdminPanel/Pages/Dashboard';
import Customer from './Components/AdminPanel/Pages/Customer';
import { AdminOrder } from './Components/AdminPanel/Pages/AdminOrder';
import EditProductPage from './Components/AdminPanel/Pages/EditProductPage';
import AddProduct from './Components/AdminPanel/Pages/AddProduct';
function App() {
  const { loggedIn , admin} = useContext(AuthContext);
  // const[changeId, setChangeId] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   if(admin===true){
  //     navigate("/adminpanel/");          
  //   }
  // }, [admin])
  

  // Scroll top when location changes
  const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 // 
 
  return (
    <>
     {admin?<></>:<Header/>}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
          <Route path="/wishList" element={<WishList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path ="/cart/checkout" element={<CheckoutForm/>}/>
          <Route path ="/UserDashboard" element={<UserDashboard/>}/>
          <Route path ="/UserDashboard/cart" element={<Cart/>}/>
          <Route path ="/UserDashboard/orders" element={<Orders/>}/>
          <Route path ="/UserDashboard/account" element={<Account/>}/>
          <Route exact path='/adminpanel' element={<Dashboard/>}/>
          <Route path="/adminpanel/customer" element={<Customer />} />
          <Route path="/adminpanel/products" element={<Inventory />} />
          <Route path="/adminpanel/products/EditProductPage/:id" element={<EditProductPage />} />
          <Route path="/adminpanel/products/AddProduct" element={<AddProduct/>} />
          <Route path="/adminpanel/orders" element={<AdminOrder />} />
          <Route path='*' element={<Error404 />}/>
        </Routes>

        {admin?<></>:<Footer/>}
    </>
  );
}

export default App;
