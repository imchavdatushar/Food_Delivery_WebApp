import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({category, setCategory}) => {

 

  return (
    <div className='flex flex-col gap-2' id='explore-menu'>
       <h1 className='text-gray-700 text-3xl'>Explore our menu</h1>
       <p className='text-xsm max-w-4xl text-gray-700'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
       <div className='flex justify-between items-center gap-16 text-center my-8 '>
            {menu_list.map((item, index) => { 
                return(
                    <div onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index}>
                        <img className='w-7.5vw min-w-20 cursor-pointer rounded-lg duration-200 ' src={item.menu_image} alt=''/>
                        <p className='mt-3 text-xl cursor-pointer text-gray-400'>{item.menu_name}</p>
                    </div>
                )
            })}
       </div>
       <hr className='mx-3 my-0 h-0.5 bg-gray-400 border-0'/>
    </div>
  );
}

export default ExploreMenu;
