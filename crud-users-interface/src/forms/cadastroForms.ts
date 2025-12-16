//Importações
import * as yup from 'yup'
//=======================================================================================

//Interface
export interface FormData {
    name: string;
    email: string;
    password: string;
    code: string;
}
//=======================================================================================

//Fields
export const fields = [
    { name: 'name', placeholder: 'Nome:', type: 'text' },
    { name: 'email', placeholder: 'E-Mail:', type: 'email' },
    { name: 'password', placeholder: 'Senha:', type: 'password' },
    { name: 'code', placeholder: 'Código:', type: 'text' },
] as const
//=======================================================================================

//Schema
export const schema = yup.object({
    name: yup.string().required('O nome é obrigatório!'),
    email: yup.string().email('Informe um e-mail válido!').required('O e-mail é obrigatório!'),
    password: yup.string().required('A senha é obrigatória'),
    code: yup.string().required('Código fornecido pelo Admin sênior para se cadastrar como admin. Como é ambiente de teste, o código é PH18J25F54')
})
//=======================================================================================
