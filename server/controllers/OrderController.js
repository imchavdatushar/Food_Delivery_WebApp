import orderModel from "../models/OrderSchema.js";
import userModel from "../models/User.js";
import Stripe from 'stripe';



const stripe = new Stripe("sk_test_51PiCzeKb8eA4LNUEdyyLHuKL0VfNVgCnkthLq7CakWhTbDPvACfNWFXqVtx906O1nMXgeXgSLreeSGkFyMcolm9y00U65PzcxL");

export const placeOrder = async(req,res) => {

    const frontend_url = "http://localhost:3001"
        try {
            const newOrder = new orderModel({
                userId : req.body.userId,
                items  : req.body.items,
                amount : req.body.amount,
                address : req.body.address
            })
                await newOrder.save();
                await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

                const line_items = req.body.items.map((item) => ({
                    price_data : {
                        currency : "inr",
                        product_data : {
                            name : item.name
                        },
                        unit_amount : item.price*100*80
                    },
                    quantity : item.quantity
                }))

                line_items.push({
                    price_data : {
                        currency : "inr",
                        product_data : {
                            name : "Delivery Charges"
                        },
                        unit_amount : 2*100*80
                    },
                    quantity :1
                })

                const session = await stripe.checkout.sessions.create({
                    line_items : line_items,
                    mode : 'payment',
                    success_url :`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
                    cancel_url :`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
                })

                res.json({success:true,session_url:session.url})

        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error while payment"})
        }
}

export const verifyOrder = async(req,res) => {
    const {orderId,success} = req.body;
    try {
        if(success==="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Payment Successfull"});
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Payment Failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error while Payment"});
    }
}


//userOrders fro frontend 

export const userOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success: true,data:orders});
    } catch (error) {
        console.log(error);
        res.json({success:true,message:"Error "})
    }
}


//listing orders for admin pannel

export const listOrders = async(req,res) => {
        try {
            const orders = await orderModel.find({});
            res.json({success:true,data:orders});
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
}


// API for updating status

export const updateStatus = async(req,res) => {
        try {
            await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
            res.json({success:true,message:"Status Updated"})
        } catch (error) {
            console.log(error)
            res.json({success:false,message:"Error"})
        }
}