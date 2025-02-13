import express from 'express'
export const movie= express()
movie.use(express.json())
import { getMovie, putMovie, postMovie, deleteMovie } from '../Controllers/movieController.js'


movie.get('/movie', getMovie)
movie.post('/movie', postMovie)
movie.put('/movie/:id', putMovie)
movie.delete('/movie/:id', deleteMovie)