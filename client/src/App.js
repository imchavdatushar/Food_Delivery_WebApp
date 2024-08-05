
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import { useState } from 'react';
import Login from './components/Login';
import MyOrders from './components/MyOrders';
import Verify from './pages/Verify';

function App() {

  const[showLogin, setShowLogin] = useState(false);


  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="mx-auto w-4/5 ">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/order" element={<PlaceOrder/>}/>
        <Route  path="/myorders" element={<MyOrders/>}/>
        <Route  path="/verify" element={<Verify/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
