import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import LoginSchema from '../../validations/LoginSchema'
import './Login.css'

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema) })
    const navigator = useNavigate()

    async function enviar(data) {
        try {
            const login = await api.post('/login', data)
            const token = login.data.token
            alert('Login efetuado com sucesso, aguarde o redirecionamento!')

            localStorage.setItem('token', token)

            navigator('/listar')

        } catch (err) {
            alert('Erro ao fazer login!')
        }
    }

    return (
        <Form title='Fazer login:' onSubmit={handleSubmit(enviar)}>
            <Input type='email' placeholder='E-mail' icon='✉️' name='email' register={register} />
            <div className='error'><span>{errors.email?.message}</span></div>

            <Input type='password' placeholder='Senha' icon='🔒' name='password' register={register} />
            <div className='error'><span>{errors.password?.message}</span></div>

            <Button text='Login' />
        </Form>
    )
}

export default Login
