//Bibliotecas
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

//Serviços
import api from '../../services/api.js'

//Schema de validação
import {schema} from '../../validations/CadastroSchema.js'

//Componentes
import { Button, Form, Input, LKN } from '../../components'

//Estilos CSS
import './Cadastro.css'



function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const navigator = useNavigate()


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