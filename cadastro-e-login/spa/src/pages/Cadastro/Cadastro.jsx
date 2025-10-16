import './Cadastro.css'
import Form from '../../components/ui/Form/Form'
import Input from '../../components/ui/Input/Input'
import dollar from '../../assets/dollar.png'
import { FaUserPlus } from 'react-icons/fa'

function Cadastro() {
    return (
        <main className='register-container'>
            <div className='img-container'>
                <img src={dollar} alt="dolar-img" />
            </div>

            <div className="text-register">
                <h1>Criar conta</h1>
                <p>Gerenciamento de finanças da WVT Tech</p>
            </div>

            <Form text='Criar nova conta' icon={FaUserPlus}>
                <Input type='text' placeholder='Nome' />
                <Input type='email' placeholder='E-mail' />
                <Input type='text' placeholder='Senha' />
            </Form>
        </main>
    )
}

export default Cadastro
