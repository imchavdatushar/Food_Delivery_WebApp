import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListItems = () => {


  const url = 'http://localhost:4000';
  const [list , setList] = useState([]);

  const fetchList = async() => {
    const response = await axios.get(`${url}/list`);
   
    if(response.data.success){
        setList(response.data.data);
    }
    else{
        toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
      const response = await axios.post(`${url}/remove`,{id:foodId});
      await fetchList();
      if(response.data.success){
          toast.success(response.data.message)
      }
      else{
        toast.error("Error")
      }
  }

  useEffect(() =>{
    fetchList();
  },[])


  return (
    <div className='ml-24 mt-12 text-gray-500 text-base'>
      <p>All Foods Lists</p>
      <div>
        <div className='grid grid-cols-5 items-center gap-32 py-4 px-6 border border-solid font-l bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      {list.map((item,index) => {
          return(
            <div className='grid grid-cols-5 items-center gap-36 py-4 px-6 border border-solid' key={index}>
              <img className='w-12' src={`${url}/images/`+item.image} alt='listIMG'/>
              <p className=''>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor-pointer'>X</p>
              
            </div>
          )
      })}
      </div>
    </div>
  );
}

export default ListItems;
