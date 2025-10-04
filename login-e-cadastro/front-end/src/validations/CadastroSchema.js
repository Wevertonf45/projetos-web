import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('Informe um email válido!').required('O email é obrigatório!'),
    password: yup.string().required('A senha é obrigatória!')
}).required()