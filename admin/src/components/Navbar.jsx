import React from 'react';
import {assets} from '../assets/assets.js'
import  { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();


const Home = () => {
  navigate('/add')
}

const Profile = () => {
  navigate('/profile')
}

  return (
    <div className='flex justify-between items-center px-12 py-2'>
      <img onClick={Home} className='' src={assets.logo} alt="logo" />
      <img onClick={Profile}  className='cursor-pointer'  src={assets.profile_image} alt="profile" />
    </div>
  );
}

export default Navbar;
