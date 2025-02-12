import express from 'express'
const app = express()
app.use(express.json())
import { clients } from './routes/clientsRoute.js'
import { phones } from './routes/phonesRoute.js'
import cors from 'cors'

app.use(cors())
app.use(clients)
app.use(phones)

app.listen(4000)