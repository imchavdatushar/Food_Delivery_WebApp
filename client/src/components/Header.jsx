import React from 'react';
import Background from './Background.jsx';

function Header() {
  return (
    
    
    <div  className='mx-auto w-34vw relative'>
      <Background className=" bg-contain absolute"/>
      <div className='flex flex-col items-start px-16 gap-8 max-w-4xl left-50 bottom-10 absolute'>
        <h2 className='text-white text-7xl'>Order your favourite food here </h2>
        <p className='text-white text-l'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
        <button className='border-none text-l bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-3xl '>View Menu</button>
      </div>
    </div>

  );
}

export default Header;
