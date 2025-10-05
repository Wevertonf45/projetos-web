import express from "express";
import { register, login, list } from "./controllers/userController.js";

const router = express.Router()

router.post('/cadastro', register)
router.post('/login', login)
router.post('/listar', list)

export default router