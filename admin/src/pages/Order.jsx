import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Order = () => {

  const url = 'http://localhost:4000';
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async() => {
      const response = await axios.get(url+"/listorders");
      if (response.data.success){
        setOrders(response.data.data);
        console.log(response.data.data);
      }
      else{
        toast.error("Error");
      }
  }

  const statusHandler = async(e,orderId) =>{

      const response = await axios.post(url+"/status",{
        orderId,
        status: e.target.value
      })
      if (response.data.success) {
        await fetchAllOrders(); 
      }
  }


  useEffect( () => {
    fetchAllOrders();
  },[])



  return (

    <div className='ml-24 mt-12 text-gray-500 text-base'>

      <h3>Order Page</h3>

      <div className=''>

        {orders.map((order,index) => (

          <div key={index} className='grid grid-cols-5 item-start gap-2 p-4 m-2 border border-gray-500 text-sm text-zinc-800'>

              <img src={assets.parcel_icon} alt="parcel" />

              <div>
                
                <p className='font-semibold'>

                    {order.items.map( (item,index) => {

                        if (index === order.items.lemgth-1) {

                          return item.name+"x"+item.quantity;

                        }   
                        else{

                         return item.name+"x"+item.quantity+", ";
                        }

                    })}

                </p>

                <p className='mt-7 mb-1 font-semibold'>
                    {order.address.firstName +" "+order.address.lastName}
                </p>

                <div className='mb-2'>

                    <p>{order.address.street+","}</p>
                    <p>{order.address.city+", " +order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>

                <p className=''>{order.address.phone}</p>

              </div>

              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>

              <div>

              <select onChange={(e) => statusHandler(e,order._id)} value={order.status} className='bg-red-100 m-1 border border-gray-500 p-2 outline-none max-w-340'>

                <option value="Food Processing"> Food Proccessing </option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>

              </select>

              </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Order;
