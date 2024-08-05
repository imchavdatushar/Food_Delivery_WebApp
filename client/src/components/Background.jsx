import React from 'react';
import background from '../assets/header_img.png'

const Background = () => {
  return (
    <div className='h-100 w-100'>
       <img className='h-100 w-100' src={background} alt='backgroundImage'/>
    </div>
  );
}

export default Background;
