import express from 'express'
export const movie= express()
movie.use(express.json())
import { getMovie, putMovie, postMovie, deleteMovie } from '../Controllers/movieController.js'


movie.get('/', getMovie)
movie.post('/', postMovie)
movie.put('/:id', putMovie)
movie.delete('/:id', deleteMovie)