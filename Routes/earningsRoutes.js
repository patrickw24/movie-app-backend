import express from 'express'
export const earnings= express()
earnings.use(express.json())
import { getEarnings,putEarnings, postEarnings, deleteEarnings  } from '../Controllers/earningsController.js'

earnings.get('/', getEarnings)
earnings.put('/:id', putEarnings)
earnings.post('/', postEarnings)
earnings.delete('/:id', deleteEarnings)