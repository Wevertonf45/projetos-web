import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import LKN from '../../components/LKN/LKN'
import './Login.css'

function Login() {
    return (
        <Form title='Fazer Login:'>
            <Input type='email' placeholder='Email:' icon='✉️' />
            <Input type='email' placeholder='Email:' icon='🔒' />
            <Button type='submit' text='Login' className='login' />
            <LKN to='/cadastro' text='Não tem uma conta? Cadastre-se!' />
        </Form>
    )
}

export default Login
