//Configuração do Prisma
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

//Configuração do JWT
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

//Outras importações
import bcrypt from 'bcrypt'


//Rota para cadastrar usuário
export const register = async (req, res) => {
    try {
        //Salvar a requisição
        const { name, email, password } = req.body

        //Verificar os dados
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' })
        }

        //Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        //Acessar o banco de dados
        const user = await prisma.users.create({
            data: { name, email, password: hashedPassword }
        })

        //Responder
        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: { id: user.id, name: user.name, email: user.email }
        })

    } catch (error) {
        //Verificar email duplicado
        if (error.code === 'P2002') {
            return res.status(409).json({ message: 'E-mail já cadastrado!' })
        }

        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}


//Rota para fazer login
export const login = async (req, res) => {
    try {
        //Salvar a requisição
        const { email, password } = req.body

        //Verificar os campos
        if (!email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' })
        }

        //Acessar o banco de dados
        const user = await prisma.users.findUnique({
            where: { email }
        })

        //Verificar se o usuário não existe
        if (!user) {
            return res.status(404).json({ message: 'E-mail não cadastrado!' })
        }

        //Verificar a senha
        const senha = bcrypt.compare(password, user.password)
        if (!senha) {
            return res.status(401).json({ message: 'Senha inválida!' })
        }

        //Token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })

        //Responder
        return res.status(200).json({
            message: 'Login efetuado com sucesso',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        })

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}


//Rota para listar usuários
export const list = async (req, res) => {
    try {
        //Acessar o banco de dados
        const users = await prisma.users.findMany({
            select: { id: true, name: true, email: true, }
        })

        //Verificar se existe usuários
        if (users.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário cadastrado!' })
        }

        //Responder
        return res.status(200).json({ users })

    } catch (error) {
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}