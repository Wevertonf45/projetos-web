//Importações
import express from 'express';
import { faturamentoAnual } from './controllers/faturController.js';

const router = express.Router();

router.get('/faturamento', faturamentoAnual);

export default router;