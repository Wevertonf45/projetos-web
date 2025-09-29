import express from 'express'
import { registerUser } from './controllers/usersController.js'

const router = express.Router()

router.post('/cadastro', registerUser)

export default router