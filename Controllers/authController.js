import { db } from "../db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const signIn = async (req, res) => {
    const tmp= req.body;
    try{
        const sql= `insert into accounts (email, name, lastName, password) 
        VALUES ($1, $2, $3, $4)`
        const arr = [tmp.email, tmp.name, tmp.lastName, tmp.password]
        const result = await db.query(sql, arr);
        res.status(200).json({ message: "Account Created" });
    }catch(err){
        console.log(error.message)
        res.status(500).json({ error: 'Failed to add user' });
    }
}

export const logIn= async (req, res)=>{

    const tmp= req.body;
    try{
        const sql= `select email, name from accounts where email = $1 and password= $2`
        const arr= [tmp.email, tmp.name,tmp.email,tmp.password]
        const result = await db.query(sql, arr)
        if (result.length > 0) {

            const secretKey = process.env.KEY_SECRET

            const token = jwt.sign(
            {
                data: result
            }, 
            secretKey,  
            { expiresIn: '1h' })

            return res.status(200).json({token});
        } else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Failed to Log In' });
    }
}

