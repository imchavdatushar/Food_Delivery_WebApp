import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-8' id='food-display'>
        <h2 className='text-gray-700 text-3xl'>Top dishes near you</h2>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 mt-6 gap-6'>
        {food_list.map((item,index) => {
            if(category==="All" || category===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
            
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
