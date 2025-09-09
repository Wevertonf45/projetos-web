import { Link } from "react-router-dom"
import './Cadastro.css'
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

function Cadastro() {
  return (
    <form className="form-cadastro">
      <h1>Cadastrar-se</h1>
      <Input />
      <Input />
      <Input />
      <Button text='Cadastrar'/>
      <p>Já tem uma conta? <Link to='/login'>Faça login!</Link>
      </p>
    </form>
  )
}

export default Cadastro