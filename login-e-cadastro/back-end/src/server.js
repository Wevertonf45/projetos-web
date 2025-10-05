import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))
app.use('/', routes)