import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-1/6 min-h-screen border-solid border-2 border-zinc-300 border-y-0 text-xs '>
      <div className='pt-12 pl-8 flex flex-col gap-4 '>
        <Link to='/add' className='flex items-center gap-4 border-solid border-2 border-zinc-300 border-r-0 p-2 cursor-pointer rounded-l  focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-red-500'>
          <img src={assets.add_icon} alt="add" />
          <p>Add Items</p>
        </Link>
        <Link to='list' className='flex items-center gap-4 border-solid border-2 border-zinc-300 border-r-0 p-2 cursor-pointer rounded-l focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-red-500'>
          <img src={assets.order_icon} alt="add" />
          <p>List Items</p>
        </Link>
        <Link to='/orders' className='flex items-center gap-4 border-solid border-2 border-zinc-300 border-r-0 p-2 cursor-pointer rounded-l focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-red-500'>
          <img src={assets.order_icon} alt="add" />
          <p>Orders</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
