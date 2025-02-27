import express from 'express'
const app = express()
app.use(express.json())
import { actor } from './Routes/actorRoutes.js'
import { earnings } from './Routes/earningsRoutes.js'
import { movie_cast } from './Routes/movie_castRoutes.js'
import { movie } from './Routes/movieRoutes.js'
import { authUser } from './Routes/authRoutes.js'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


app.use(cors());
app.use(express.json());

const tokenValidation =(req, res, next)=>{

    const authorization = req.headers['authorization']
    if (!authorization){
        return res.status(400).json({message : "You need to pass a Token"})
    }

    const token = authorization.replace('Bearer', '')

    try {
        const secret = process.env.KEY_SECRET
        const decodeToken = jwt.verify(token, secret)
        next()
    }catch(err){
        return res.status(400).json({message : "Invalid Token"})
    }
    

    
}


app.use('/', tokenValidation, actor)
app.use('/', tokenValidation, earnings)
app.use(movie_cast)
app.use('/', tokenValidation ,movie)
app.use('/auth', authUser)

app.post('/validateSesion', tokenValidation, (req, res) => {
    res.json({ message: "Valid Token" })
})

const port = process.env.PORT || 8080

app.listen(port);