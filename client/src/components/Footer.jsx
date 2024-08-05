import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-2 mt-24 px-32 text-white bg-neutral-700 pt-8' id='footer'>
      <div className='w-full grid grid-cols-4 gap-12'> 
        <div className="col-start-0 col-span-2 pt-6 flex flex-col items-start gap-4">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className='flex w-10 mr-15 gap-4'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="flex flex-col items-start gap-4">
            <h2 className='text-white '>COMPANY</h2>
            <ul className='cursor-pointer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
            <h2 className='text-white '>GET IN TOUCH</h2>
            <ul className='cursor-pointer'>
                <li>+91-9876543210</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-2 my-2'/>
      <p className='mb-4'>Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
  );
}

export default Footer;
