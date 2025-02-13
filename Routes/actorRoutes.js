import express from 'express'
export const actor= express()
actor.use(express.json())
import { getActors, postActors, putActor, deleteActor } from '../Controllers/actorsController.js'


actor.get('/actor', getActors)
actor.post('/actor', postActors)
actor.put('/actor/:id', putActor)
actor.delete('/actor/:id', deleteActor)