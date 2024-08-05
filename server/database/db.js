import mongoose from "mongoose";

export const Connection = async()=>{
    const URL = 'mongodb://127.0.0.1:27017/Zomato-clone';

    try {

      await  mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser : true})
      console.log('Database connected successfully')


    } catch (error) {

        console.log('error while connecting with the database ', error.message);
    }

}

export default Connection;