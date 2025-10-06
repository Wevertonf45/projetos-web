import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))
app.use('/', routes)