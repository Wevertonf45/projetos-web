import * as yup from 'yup'

const LoginSchema = yup.object({
    email: yup.string().email('*Informe um email válido!').required('*O email é obrigatório'),
    password: yup.string().min(6, '*A senha deve ter pelo menos 6 caracteres!').required('*A senha é obrigatória!')
}).required()

export default LoginSchema