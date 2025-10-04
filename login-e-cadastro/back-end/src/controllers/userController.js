//Importações
import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
console.log("🔐 Valor de JWT_SECRET:", process.env.JWT_SECRET)


//Rota para cadastrar usuário
export const register = async (req, res) => {
    try {
        //Salvar a requisição
        const { name, email, password } = req.body

        //Verificar se os dados existem
        if (!name || !email || !password) {
            return res.status(400).json('Preencha todos os campos')
        }

        //Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        //Verificar se o email já existe
        const existingEmail = await User.findOne({
            where: { email }
        })

        if (existingEmail) {
            return res.status(409).json({ message: 'Este email já está cadastrado!' })
        }

        //Criar um novo usuário
        const createUser = { name, email, password: hashedPassword }

        //Acessar o banco de dados
        const user = await User.create(createUser)

        //Responder
        return res.status(201).json({
            message: 'Usuário criado com sucesso!',
            user: { id: user.id, name: user.name, email: user.email }
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}


//Rota para fazer login
export const login = async (req, res) => {
    try {
        //Salvar a requisição
        const { email, password } = req.body

        // Verificar se todos os campos foram enviados
        if (!email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' });
        }

        //Acessar o banco de dados
        const user = await User.findOne({ where: { email } })

        //Verificar se o usuário não existe
        if (!user) {
            return res.status(404).json({ message: 'E-mail não cadastrado!' })
        }

        //Verificar a senha
        const senha = await bcrypt.compare(password, user.password)
        if (!senha) {
            return res.status(400).json({ message: 'Senha inválida!' })
        }

        //Token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' })

        //Responder
        return res.status(200).json({
            message: 'Login efetuado com sucesso!',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        })

    } catch (err) {
        console.error("Erro no login:", err)
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}