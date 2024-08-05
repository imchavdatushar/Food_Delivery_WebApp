import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {



  const{  cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='w-full m-auto rounded-lg shadow-lg'>
      <div className='relative'>
        <img className='w-full rounded-lg' src={url+"/images/"+image} alt='' />
        {!cartItems[id]
                ?<img className='absolute w-9 cursor-pointer bottom-2 right-2 rounded-xl' onClick={ () => addToCart(id)} src={assets.add_icon_white} alt='' /> 
                : <div className='flex items-center gap-2 p-1 rounded-3xl bg-white absolute bottom-2 right-2'>
                    <img className='w-6' onClick={ () => removeFromCart(id)} src={assets.remove_icon_red} alt='' /> 
                    <p>{cartItems[id]}</p>
                    <img className='w-6' onClick={ () => addToCart(id)} src={assets.add_icon_green} alt=''/>
                  </div>
            }
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-2'>
            <p className='text-xl font-medium'>{name}</p>
            <img className='w-16' src={assets.rating_starts} alt='' />
        </div>
        <p className='text-xs text-gray-500'>{description}</p>
        <p className='text-xl font-medium text-red-500'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
