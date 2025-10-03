import express from 'express'
import router from './routes.js'
import User from './models/User.js'
import { Sequelize } from 'sequelize'
import config from './config/database.js'

const app = express()
const sequelize = new Sequelize(config)
User.init(sequelize)

app.use(express.json())
app.use('/', router)

sequelize.authenticate().then(() => {
    console.log('Banco de dados conectado!')
    app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))
}).catch((err) => {
    console.error(err)
})
