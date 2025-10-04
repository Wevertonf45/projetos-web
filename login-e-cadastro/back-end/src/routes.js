import express from 'express'
import { register, login } from './controllers/userController.js'

const router = express.Router()

router.post('/cadastro', register)
router.post('/login', login)

export default router