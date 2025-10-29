//Importações
import express from 'express';
import { faturamentoAnual, faturamentoMensal } from './controllers/faturController.js';

const router = express.Router();

router.get('/faturamento-anual', faturamentoAnual);
router.get('/faturamento-mensal', faturamentoMensal)

export default router;