import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';

const MyOrders = () => {

  const [data,setData] = useState([]);
 const {url,token} = useContext(StoreContext);

const fetchOrders = async() => {
  const response = await axios.post(url+"/userorders",{},{headers:{token}});
  setData(response.data.data);

}

useEffect( () => {
  if  (token) {
    fetchOrders();
  }
},[token])

  return (
    <div className='m-12'>

      <h2>My Orders</h2>

      <div className='flex flex-col gap-4 mt-8'>

        {data.map((order,index) => {

            return(

              <div className='grid grid-cols-6 items-center gap-8 text-sm text-stone-600 p-2 border border-gray-500'key={index}>

                  <img className='w-12' src={assets.parcel_icon} alt="parcel" />

                  <p>{order.items.map((item,index) => {

                      if (index === order.items.length-1) {

                          return item.name+"x"+item.quantity;

                      }
                      else{
                        return item.name+"x"+item.quantity+", ";
                      }

                  })}</p>

                  <p>${order.amount}.00</p>
                  <p>Items : {order.items.length}</p>
                  <p><span className='text-red-500'>&#8226;</span> <b className='font-medium text-gray-700'>{order.status}</b></p>
                  <button onClick={fetchOrders} className='border-none p-2  m-4 rounded-l bg-red-100 cursor-pointer'>Track Order</button>

              </div>

            )

        })}

      </div>

    </div>
  );
}

export default MyOrders;
