//DOTENV
import dotenv from 'dotenv'
dotenv.config()


//Importações
import connection from "../configs/database.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//Variáveis de configurações
const JWT_SECRET = process.env.JWT_SECRET


//Rota para cadastrar usuários
export const createUser = async (req, res) => {
    try {
        //Salvar a requisição
        const { name, email, password } = req.body

        //Verificar os campos
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos' })
        }

        //Verificar se o email já existe
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email])
        if (rows.length > 0) {
            return res.status(409).json({ message: 'E-mail já cadastrado!' })
        }

        //Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        //Inserir novo usuário
        const user = await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]
        )

        //Responder
        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: { name, email }
        })

    } catch (error) {
        console.log(error)
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

        //Buscar o usuário pelo email
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email])
        const user = rows[0]

        //Verificar se o email existe
        if (!user) {
            return res.status(404).json({ message: 'E-mail não cadastrado' })
        }

        //Verificar a senha
        const correctPassword = await bcrypt.compare(password, user.password)
        if (!correctPassword) {
            return res.status(401).json({ message: 'Senha inválida!' });
        }

        //Gerar o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '3d' })

        //Responder
        return res.status(200).json({
            message: 'Login efetuado com sucesso!',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro no servidor' })
    }
}