//Importações
import connection from '../config/database.js';
import bcrypt from 'bcrypt';


//Configurações do JWT
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;


// Rota para cadastrar usuário
export const register = async (req, res) => {
    try {
        //Salvar a requição
        const { name, email, password } = req.body;

        //Verificar os campos
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' });
        }

        // Verifica se o email já existe
        const [existingUser] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (existingUser.length > 0) {
            return res.status(409).json({ message: 'E-mail já cadastrado!' });
        }

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insere o novo usuário
        await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        //Responder
        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: { name, email },
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor!' });
    }
};

// Rota para fazer login
export const login = async (req, res) => {
    try {
        //Salvar a requisição
        const { email, password } = req.body;

        //Verifica as informações
        if (!email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos!' });
        }

        // Busca o usuário pelo email
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        const user = rows[0];

        if (!user) {
            return res.status(404).json({ message: 'E-mail não cadastrado!' });
        }

        // Verifica a senha
        const senhaCorreta = await bcrypt.compare(password, user.password);
        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Senha inválida!' });
        }

        // Gera o token JWT
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

        //Responder
        return res.status(200).json({
            message: 'Login efetuado com sucesso!',
            token,
            user: { id: user.id, name: user.name, email: user.email },
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor!' });
    }
};

// Rota para listar usuários
export const list = async (req, res) => {
    try {
        const [users] = await connection.execute(
            'SELECT id, name, email FROM users'
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário cadastrado!' });
        }

        return res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro no servidor!' });
    }
};
