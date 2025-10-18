//Importações
import express from 'express'
import { register, login } from './controllers/usersController.js' 


//Variáveis de configurações
const router = express.Router()


//Configurações do servidor
router.post('/cadastro', register)
router.post('/login', login)


export default router