import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/input/Input'
import CadastroSchema from '../../validations/CadastroSchema.js'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api.js'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {

    const navigator = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(CadastroSchema) })

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
            <Input type='text' placeholder='Nome:' icon='👤' name='name' register={register} />
            <div className='error'><span>{errors.name?.message}</span></div>

            <Input type='email' placeholder='E-mail:' icon='✉️' name='email' register={register} />
            <div className='error'><span>{errors.email?.message}</span></div>

            <Input type='password' placeholder='Senha:' icon='🔒' name='password' register={register} />
            <div className='error'><span>{errors.password?.message}</span></div>

            <Button text='Cadastrar' />
        </Form>
    )
}

export default Cadastro