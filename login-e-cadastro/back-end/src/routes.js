//Importações
import express from 'express'
import { cadastrar, login, listar } from './controllers/usersController.js'


//Variáveis de configurações
const router = express.Router()


//Rotas
router.post('/cadastro', cadastrar)
router.post('/login', login)
router.get('/listar', listar)

export default router