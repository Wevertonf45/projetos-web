import './Cadastro.css'
import Form from '../../components/ui/Form/Form'
import Input from '../../components/ui/Input/Input'
import { FaUserPlus } from 'react-icons/fa'
import Lnk from '../../components/ui/lnk/lnk'
import Button from '../../components/ui/Button/Button'

function Cadastro() {
    return (
        <Form text='Criar nova conta' icon={FaUserPlus} title='Criar conta' desc='Gerenciamento de finanças da WVT Tech'>
            <Input type='text' placeholder='Nome' />
            <Input type='email' placeholder='E-mail' />
            <Input type='text' placeholder='Senha' />
            <Lnk to='/' text='Já tem uma conta? Faça login!' />
            <Button text='Cadastrar' />
        </Form>
    )
}

export default Cadastro
