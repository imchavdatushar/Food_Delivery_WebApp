import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className='m-auto mt-24 text-4xl font-bold text-center' id='app-download'>
      <p>For Better Experience Download<br/>Tomato App</p>
      <div className='flex mt-4 justify-center gap-4'>
        <img className='w-30 max-w-44 cursor-pointer transition ease-in-out delay-150 hover:scale-110  duration-300' src={assets.play_store} alt="" />
        <img className='w-30 max-w-44 cursor-pointer transition ease-in-out delay-150 hover:scale-110  duration-300' src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
