import React, {  useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddItems = () => {


  const url ="http://localhost:4000";
  const [image, setImage] = useState();
  const [data, setData] = useState({
    name : "",
    description : "",
    price : "",
    category : "Salad"
  });


  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data,[name]:value}))
  }


  const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)

        const response = await axios.post(`${url}/add`,formData);

        if(response.data.success){
            setData({
              name : "",
              description : "",
              price : "",
              category : "Salad"
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message);
        }

  }




  return (
    <div className='w-3/4 ml-24 mt-12 text-gray-500 text-base'>
      <form className='gap-5 flex flex-col' onSubmit={onSubmitHandler}>

          <div>
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img className='w-32' src={image?URL.createObjectURL(image):assets.upload_area} alt="upload" />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
            </label>
          </div>

          <div  className='max-w-72'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} className='p-4' type="text" name='name' placeholder='Type here'/>
          </div>

          <div className='max-w-72 '>
            <p>Product Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} className='p-4' name='description' id='' rows="6" placeholder='Write content here' required></textarea>
          </div>

          <div className='flex gap-8'>

            <div>
              <p>Product Category</p>
              <select  onChange={onChangeHandler} className='my-2 max-w-28 p-2' name='category'>
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div>
              <p>Product Price</p>
              <input  onChange={onChangeHandler} value={data.price} className='max-w-28 p-2' type="Number" name="price" placeholder='$20' />
            </div>

          </div>

          <button className='max-w-28 border-none p-2 bg-black text-white cursor-pointer rounded-xl' type='submit'>ADD</button>

      </form>

    </div>
  );
}

export default AddItems;
