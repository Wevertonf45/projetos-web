import * as yup from 'yup'

const CadastroSchema = yup.object({
    name: yup.string().required('*O nome é obrigatório!'),
    email: yup.string().email('*Informe um email válido!').required('*O email é obrigatório'),
    password: yup.string().min(6, '*A senha deve ter pelo menos 6 caracteres!').required('*A senha é obrigatório!')
}).required()

export default CadastroSchema