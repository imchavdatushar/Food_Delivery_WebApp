import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';


const Login = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Login");
    const [data,setData] = useState({
      name : "",
      email : "",
      password : ""
    })


    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onLogin = async(e) => {
        e.preventDefault();
        let newUrl = url;

        if(currentState==="Login"){
            newUrl += "/login";
        }
        else{
          newUrl += "/register";
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else{
          alert(response.data.message);
        }
    }
   
    
  return (
    <div className='absolute  z-10  backdrop-brightness-50 w-full h-full '>
      <form onSubmit={onLogin} className=" flex flex-col my-44 gap-4 rounded-xl max-w-md  mx-auto bg-white">
        <div className='flex mx-8 justify-between items-center text-black'>
            <h2>{currentState}</h2>
            <img className='w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='flex flex-col mx-8'>
            {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            
            <input  name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input  name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
        </div>
        <button type='submit' className='text-white mx-8 py-2 rounded-l bg-orange-600'>{currentState==="Sign Up"?"Create Account" : "Login"}</button>
        <div className='flex items-start gap-2 mt--2 mx-8'>
            <input className='mt-2' type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Sign Up"
        ?
            <p className=' text-center mb-4'>Already have an account? <span className='cursor-pointer text-blue-700' onClick={() => setCurrentState("Login")}>Login here</span></p>
        :
            <p className=' text-center mb-4'>Create a new account? <span className='cursor-pointer text-blue-700' onClick={() => setCurrentState("Sign Up")}>Click here</span></p>}
        
      </form>
    </div>
  );
}

export default Login;
