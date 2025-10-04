import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import LKN from '../../components/LKN/LKN'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
    const navigator = useNavigate()

    const schema = yup.object({
        name: yup.string().required('O nome é obrigatório!'),
        email: yup.string().email('Informe um email válido!').required('O email é obrigatório!'),
        password: yup.string().required('A senha é obrigatória!')
    })


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    async function enviar(data) {
        try {
            await api.post('/cadastro', data)
            alert('Sucesso ao cadastrar!')
            navigator('/login')


        } catch (err) {
            alert('Erro ao cadastrar!')
        }
    }



    return (
        <Form title='Cadastrar-se:' onSubmit={handleSubmit(enviar)}>
            <Input placeholder='Nome:' icon='👤' name='name' register={register} />
            <div className='errors'><span>{errors.name?.message}</span></div>

            <Input placeholder='Email:' icon='✉️' name='email' register={register} />
            <div className='errors'><span>{errors.email?.message}</span></div>

            <Input placeholder='Senha:' icon='🔒' name='password' register={register} />
            <div className='errors'><span>{errors.password?.message}</span></div>

            <Button type='submit' className='button-cadastro' text='Cadastrar' />
            <LKN to='/login' text='Já tem uma conta? Faça login!' />
        </Form>
    )
}

export default Cadastro
