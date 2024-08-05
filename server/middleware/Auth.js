import jwt from 'jsonwebtoken';



const jwtSecret = "mynameissomethingelse";


export const authMiddlewere = async (req,res,next) => {

    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorised Login again"})
    }
    try {
        const token_decode = jwt.verify(token,jwtSecret);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}