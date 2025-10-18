//Importações
import { FaUserPlus } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Form, Input, Button, Lnk } from '../../components/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './Cadastro.css'

function Cadastro() {
    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório!"),
        email: yup.string().email("Informe um e-mail válido!").required("O e-mail é obrigatório!"),
        password: yup.string().required("A senha é obrigatória!").min(6, "Mínimo de 6 caracteres")
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const navigate = useNavigate()

    async function enviar(data) {
        try {
            await api.post('/cadastro', data)
            alert('Sucesso ao cadastrar!')
            navigate('/')

        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar!')
        }
    }

    return (
        <Form
            text='Criar nova conta'
            icon={FaUserPlus} title='Criar conta'
            desc='Gerenciamento de finanças da WVT Tech'
            onSubmit={handleSubmit(enviar)}>

            <Input type='text' placeholder='Nome' name='name' autoComplete='name' register={register} />
            <div className='errors'><span>{errors.name?.message}</span></div>

            <Input type='email' placeholder='E-mail' name='email' autoComplete='email' register={register} />
            <div className='errors'><span>{errors.email?.message}</span></div>

            <Input type='password' placeholder='Senha' name='password' autoComplete='current-password' register={register} />
            <div className='errors'><span>{errors.password?.message}</span></div>

            <Lnk to='/' text='Já tem uma conta? Faça login!' />
            <Button text='Cadastrar' />
        </Form>
    )
}

export default Cadastro