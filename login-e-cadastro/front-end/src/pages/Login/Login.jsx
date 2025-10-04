import { Form, Button, Input, LKN } from '../../components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../validations/LoginSchema.js'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import './Login.css'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const navigate = useNavigate()

    async function enviar(data) {
        try {
            const login = await api.post('/login', data)
            const token = login.data.token
            localStorage.setItem('token', token)
            navigate('/')

            
        } catch (err) {
            alert('Erro ao cadastrar!')
        }


    }

    return (
        <Form title='Fazer Login:' onSubmit={handleSubmit(enviar)}>
            <Input type='email' placeholder='Email:' icon='✉️' name='email' register={register} />
            <div className='errors'><span>{errors.email?.message}</span></div>

            <Input type='password' placeholder='Senha:' icon='🔒' name='password' register={register} />
            <div className='errors'><span>{errors.password?.message}</span></div>

            <Button type='submit' text='Login' className='login' />
            <LKN to='/cadastro' text='Não tem uma conta? Cadastre-se!' />
        </Form>
    )
}

export default Login
