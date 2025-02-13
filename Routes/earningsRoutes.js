import express from 'express'
export const earnings= express()
earnings.use(express.json())
import { getEarnings,putEarnings, postEarnings, deleteEarnings  } from '../Controllers/earningsController.js'

earnings.get('/earnings', getEarnings)
earnings.put('/earnings/:id', putEarnings)
earnings.post('/earnings', postEarnings)
earnings.delete('/earnings/:id', deleteEarnings)