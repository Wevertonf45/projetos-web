import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import LKN from '../../components/LKN/LKN'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Cadastro.css'

function Cadastro() {
    const schema = yup.object({
        nome: yup.string().required('O nome é obrigatório!'),
        email: yup.string().email('Informe um email válido!').required('O email é obrigatório!'),
        senha: yup.string().required('A senha é obrigatória!')
    })


    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})

    function enviar (data) {
        alert('Submit funcionando!')
    }



    return (
        <Form title='Cadastrar-se:' onSubmit={handleSubmit(enviar)}>
            <Input placeholder='Nome:' icon='👤' name='nome' register={register} />
            <div className='errors'><span>{errors.nome?.message}</span></div>

            <Input placeholder='Email:' icon='✉️' name='email' register={register} />
            <div className='errors'><span>{errors.email?.message}</span></div>

            <Input placeholder='Senha:' icon='🔒' name='senha' register={register} />
            <div className='errors'><span>{errors.senha?.message}</span></div>

            <Button type='submit' className='button-cadastro' text='Cadastrar' />
            <LKN to='/login' text='Já tem uma conta? Faça login!' />
        </Form>
    )
}

export default Cadastro
