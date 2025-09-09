import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <form className='login-form'>
      <h1>Entrar no sistema</h1>

      <Input placeholder='Usuário:' type='text' />
      <Input placeholder='Senha:' type='password' />

      <div className="remember">
        <label htmlFor="check">
          <input type="checkbox" id="check" />
          Lembrar a senha
        </label>
        <a href="#">Esqueci a senha</a>
      </div>

      <Button text='Entrar' />

      <div className="forgot">
        <p>Não tem um acesso? <Link to='/cadastro'>Cadastre-se</Link> </p>
      </div>
    </form>
  )
}

export default Login