import express from 'express'
export const authUser= express()
import { signIn, logIn } from '../Controllers/authController.js'

authUser.post('/register', signIn)
authUser.post('/login', logIn)