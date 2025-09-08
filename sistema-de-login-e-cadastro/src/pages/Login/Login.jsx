import './Login.css'

export function Login () {
  return (
    <form className='login-form'>
      <h1>Fazer login</h1>
      <input placeholder="Usuário" type="text" />
      <input placeholder="Senha" type="password" />
      <button>Login</button>
    </form>
  )
}