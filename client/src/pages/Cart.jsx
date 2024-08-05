import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const{cartItems, food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext)
  const navigate = useNavigate();



  return (
    <div className='mt-24'>
      <div>
        <div className='grid grid-cols-6 items-center text-gray-500 text-sm'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) => {
            if(cartItems[item._id]>0){
              return(
                <div>
                <div className='grid grid-cols-6 items-center font-bold text-black text-sm my-4 '>
                  <img className='w-12' src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p> ${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr/>
                </div>
              )
            }
        })}
      </div>
      <div className='mt-20 flex  justify-between gap-4'>
        <div className='flex-1 mr-48 flex-col gap-4'>
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
          <button onClick={() => navigate('/order')} className='text-white  p-2 rounded-l mt-2 bg-red-500 cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1 mt-6 mr-4'>
          <p className='text-gray-500'>If you have a promo code, Enter it here</p>
          <div className=' flex justify-between items-center bg rounded-l'>
            <input className='bg-gray-100' type="text" placeholder='PROMO CODE'/>
            <button className='text-white p-2 rounded-xl bg-black'>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
