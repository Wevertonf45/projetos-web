import { Link } from "react-router-dom"
import './Cadastro.css'
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Form from "../../components/Form/Form"

function Cadastro() {
  return (
   <Form 
   title='Cadastrar'
   showUser
   showEmail
   showPassword
   showGo text='Já tem uma conta ? ' to='/' text2='Faça login!'
   />
  )
}

export default Cadastro

/*
 <form className="form-cadastro">
      <h1>Cadastrar-se</h1>
      <Input placeholder='' type=''  />
      <Input placeholder='' type='' />
      <Input placeholder='' type='' />
      <Button text='Cadastrar'/>
      <p>Já tem uma conta? <Link to='/login'>Faça login!</Link></p>
    </form>*/