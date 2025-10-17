import React from 'react'
import Form from '../../components/ui/Form/Form'
import { FaSignInAlt } from 'react-icons/fa'
import Input from '../../components/ui/Input/Input'
import Lnk from '../../components/ui/lnk/lnk'
import Button from '../../components/ui/Button/Button'

function Login() {
    return (
        <Form text='Entrar no sistema' icon={FaSignInAlt} title='Sistema de finanças' desc='Somente para pessoas autorizadas!'>
            <Input type='email' placeholder='E-mail'/>
            <Input type='password' placeholder='Senha'/>
            <Lnk to='/cadastro' text='Não tem acesso? Cadastre-se!'/>
            <Button text='Entrar'/>
        </Form>
    )
}

export default Login
