import { Link } from "react-router-dom"
import './Cadastro.css'

export function Cadastro() {
  return (
    <form className="form">
      <h1>Cadastrar-se</h1>
      <input placeholder="Usuário" type="text" />
      <input placeholder="E-mail" type="email" />
      <input placeholder="Senha" type="password" />
      <button>Cadastrar</button>
      <Link to='/login'>Já tem uma conta? Castre-se!</Link>
    </form>
  )
}