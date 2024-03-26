import dotenv from "dotenv"
import jwt  from "jsonwebtoken";

dotenv.config();

const jwtsecret = process.env.JWT_SECRET

export const fetchUser = (req,res,next)=>{


    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error:"Please authenticate with valid token"})
    }

    try {
        
        const data = jwt.verify(token,jwtsecret)

        req.user = data.user
        next()

    } catch (error) {
        res.status(500).send({error:"Please authenticate with valid token"})
    }



}
