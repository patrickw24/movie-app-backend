import express from 'express'
const app = express()
app.use(express.json())
import { actor } from './Routes/actorRoutes.js'
import { earnings } from './Routes/earningsRoutes.js'
import { movie_cast } from './Routes/movie_castRoutes.js'
import { movie } from './Routes/movieRoutes.js'
import cors from 'cors'

app.use(cors())
app.use(actor)
app.use(earnings)
app.use(movie_cast)
app.use(movie)

app.listen(4000)