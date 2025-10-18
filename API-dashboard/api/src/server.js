// Importações
import express from 'express'
import cors from 'cors'
import routes from './routes.js'

// Variáveis de configurações
const app = express()

// Middlewares globais
app.use(cors())
app.use(express.json())

// Rotas
app.use('/', routes)

// Configurações do servidor
app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000!'))
