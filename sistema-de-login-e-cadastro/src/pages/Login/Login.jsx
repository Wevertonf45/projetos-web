import Form from '../../components/Form/Form'
import './Login.css'

function Login() {
  return (
    <Form
      title='Entrar no sistema:'
      showUser
      showPassword
      showRemember
      showGo text='Não tem uma conta? ' to='/cadastro' text2='Cadastre-se!'
      
    />
  )
}

export default Login