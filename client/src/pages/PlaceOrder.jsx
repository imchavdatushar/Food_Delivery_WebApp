import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);
  
  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData( data => ({...data,[name]:value}))
    }

    const placeOrder = async(e) => {
        e.preventDefault();
        let ordetItems = [];
        food_list.map((item) => {
          if(cartItems[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            ordetItems.push(itemInfo)
          }
        })
        let orderData = {
          address : data,
          items : ordetItems,
          amount : getTotalCartAmount() + 2,
        }
        let response = await axios.post(url+"/placeorder",orderData,{headers:{token}})
        if(response.data.success){
          const {session_url} = response.data;
          window.location.replace(session_url);
          
        }
        else{
          alert("Error");
          
        }
    }

    const navigate = useNavigate();

    useEffect( () => {
        if(!token){
            navigate("/cart")
        }
        else if (getTotalCartAmount() === 0){
          navigate("/cart")
        }
    },[token])

   
  return (
    <div>
      <form onSubmit={placeOrder} className='flex item-start justify-between gap-4 mt-24'>
        <div className='w-full max-w-lg'>
          <p className='text-3xl font-semibold mb-8'>Delivery Information</p>
          <div className='flex gap-2'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email Address' />
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className='flex gap-2'>
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className='flex gap-2'>
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
        </div>
        <div>
        <div className='flex-1 mr-48 flex-col gap-4 w-full max-w-lg'>
          <h2>Cart Total</h2>
          <div >
            <div className='flex my-2  justify-between text-gray-500'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex  justify-between text-gray-500'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex my-2 justify-between text-gray-500'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'  className='text-white mt-8 p-2 rounded-l mt-2 bg-red-500 cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
