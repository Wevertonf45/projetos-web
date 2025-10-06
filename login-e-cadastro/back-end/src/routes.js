import express from "express";
import { register, login, list } from "./controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router()

router.post('/cadastro', register)
router.post('/login', login)
router.get('/listar', auth, list)

export default router