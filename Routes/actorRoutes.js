import express from 'express'
export const actor= express()
actor.use(express.json())
import { getActors, postActors, putActor, deleteActor } from '../Controllers/actorsController.js'


actor.get('/', getActors)
actor.post('/', postActors)
actor.put('/:id', putActor)
actor.delete('/:id', deleteActor)