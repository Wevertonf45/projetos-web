//Importações
import bcrypt from 'bcrypt'
import User from '../models/User.js'

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