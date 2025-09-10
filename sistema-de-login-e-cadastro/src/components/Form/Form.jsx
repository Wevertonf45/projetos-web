import Button from '../Button/Button'
import Input from '../Input/Input'
import { Link } from 'react-router-dom'

import './form.css'

function Form(props) {
  return (
    <form>
      <h1>{props.title}</h1>
      {props.showUser && <Input placeholder='Usuário' type='text' />}
      {props.showEmail && <Input placeholder='email' type='text' />}
      {props.showPassword && <Input placeholder='password' type='text' />}

      {props.showRemember && (
        <div className="remember">
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            Lembrar a senha
          </label>
          <a href="#">Esqueci a senha</a>
        </div>
      )}

      <Button text='Entrar'/>

      <div className='forgot'>
        {props.showGo && <p>{props.text}<Link to={props.to}>{props.text2}</Link></p>}
      </div>

    </form>
  )
}

export default Form