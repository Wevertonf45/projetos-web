//Importações
import express from 'express';
import { login, createUser } from './controllers/userController.js';

const router = express.Router();

//Chamada das rotas
router.post('/', login)
router.post('/cadastro', createUser)

export default router;