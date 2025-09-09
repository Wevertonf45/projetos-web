import Form from '../../components/Form/Form'
import './Login.css'

function Login() {
  return (
    <Form
      title='Entrar no sistema:'
      showUser
      showPassword
      showRemember
      showGologin
    />
  )
}

export default Login