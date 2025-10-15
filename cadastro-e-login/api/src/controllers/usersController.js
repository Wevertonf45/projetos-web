//IMportações
import database from "../configs/database.js"
import bcrypt from 'bcrypt'


//Rota para cadastro
export const register = async (req, res) => {
    try {
        //Salvar a requisição
        const { name, email, password } = req.body

        //Verificar os campos
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' })
        }

        //Verificar se o email já existe
        const [existingEmail] = await database.execute('SELECT * FROM users WHERE email = ?', [email])
        if (existingEmail.length > 0) {
            return res.status(409).json({ message: 'E-mail já cadastrado!' })
        }

        //Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        //Criar o novo usuário
        const user = await database.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        )

        //Responder
        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            user: { name, email }
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}


//Rota para fazer login
export const login = (req, res) => {
}