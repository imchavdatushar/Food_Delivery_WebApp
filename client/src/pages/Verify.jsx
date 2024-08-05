import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';




const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    
    
    const verifyPayment = async() => {
        const response = await axios.post(url+"/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }

    useEffect(() => {
        verifyPayment();
    },[])

  return (
    <div className='min-h-px grid '>
        <div className='w-24 h-24 place-self-center border-t-4 border-red-500 rounded-full animate-spin'>

        </div>
    </div>
  );
}

export default Verify;
