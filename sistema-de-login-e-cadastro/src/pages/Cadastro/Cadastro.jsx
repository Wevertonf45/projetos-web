import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import LKN from '../../components/LKN/LKN'
import './Cadastro.css'

function Cadastro() {
    return (
        <Form title='Cadastrar-se:'>
            <Input placeholder='Nome:' />
            <Input placeholder='Email:' />
            <Input placeholder='Senha:' />
            <Button className='button-cadastro' text='Cadastrar'/>
            <LKN to='/login' text='Já tem uma conta? Faça login!'/>
        </Form>
    )
}

export default Cadastro
