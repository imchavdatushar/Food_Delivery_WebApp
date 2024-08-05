import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from '../context/StoreContext';
import OrderIcon from '@mui/icons-material/DeliveryDining';
import LogoutIcon from '@mui/icons-material/Logout';



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate('/'); 
    }

  
  return (
    <div className=' flex justify-between px-4' >
        <Link to="/home"> <img  src={assets.logo} alt="logo" className='py-12 w-36' /></Link>
      <div className='flex py-12 gap-8 items-center font-outfit text-neutral-700 '>
        <Link onClick={ () => setMenu("home")} className={menu === "home" ? "active" : ""}  to="/home">Home</Link>
        <a href='#explore-menu' onClick={ () => setMenu("menu")} className={menu === "menu" ? "active" : ""} >menu</a>
        <a href='#app-download' onClick={ () => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >mobile-app</a>
        <a href='#footer' onClick={ () => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} >contact us</a>
      </div>
      <div className="flex  items-center gap-8 ">
        <img src={assets.search_icon} alt="search" />
         <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
         </div>
         {!token 
          ?<button onClick={() => setShowLogin(true)} className='bg-transparent text-neutral-700 border-solid border-2 border-gray-500 hover:bg-gray-200 rounded-full px-6 py-2'>Sign in</button>
          :<div className='relative '>
            <div className='flex gap-8 mx-4 '>
              <Link to='/myorders'><OrderIcon  style={{width: '40px',height: '60px', paddingTop:"8px", color:"rgb(54, 76, 112)", cursor:"pointer"}} /></Link>
              <LogoutIcon style={{width: '30px',height: '60px',color:"rgb(54, 76, 112)", paddingTop:"8px",cursor:"pointer"}} onClick={logout}/>
              
            </div>
            
            {/* <select>
              <option>Profile<img src={assets.profile_icon} alt="" /></option>
              <option>Orders</option>
              <option onClick={logout}>Logout</option>
            </select>  */}
            {/* <img onClick={logout} src={assets.profile_icon} alt="" /> */}
              {/* <ul className='absolute z-1 right-0 hover:dropdown hidden flex flex:col'>
                  
                <li><img className='cursor-pointer' src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr/>
                <li><img className='cursor-pointer' src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul> */}
          </div>
        }
         
      </div>
    </div>
  );
}


export default Navbar;
