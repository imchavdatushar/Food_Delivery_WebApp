import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/FoodController.js';
import multer from 'multer';
import { loginUser, registerUser } from '../controllers/UserController.js';
import { addToCart, getCart, removeFromCart } from '../controllers/CartController.js';
import { authMiddlewere } from '../middleware/Auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/OrderController.js';

const Router = express.Router();


//Image storage engine 

const storage = multer.diskStorage({
    destination : "uploads",
    name : (req,file,callback)=> {
        return callback(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage})

Router.post("/add",upload.single("image"), addFood);
Router.get('/list',listFood);
Router.post('/remove',removeFood);

Router.post("/register", registerUser);
Router.post("/login",loginUser);

Router.post("/addtocart",authMiddlewere,addToCart);
Router.post("/removefromcart",authMiddlewere,removeFromCart);
Router.post("/getcart",authMiddlewere,getCart);

Router.post("/placeorder",authMiddlewere,placeOrder);
Router.post("/verify",verifyOrder);

Router.post("/userorders",authMiddlewere,userOrders);
Router.get("/listorders",listOrders);

Router.post("/status",updateStatus);

export default Router;