import express from 'express'
export const movie_cast= express()
movie_cast.use(express.json())
import { getCast, putCast, postCast, deleteCast } from '../Controllers/movie_castController.js'

movie_cast.get('/movie_cast', getCast)
movie_cast.post('/movie_cast', postCast)
movie_cast.put('/movie_cast/:id', putCast)
movie_cast.delete('/movie_cast/:id', deleteCast)