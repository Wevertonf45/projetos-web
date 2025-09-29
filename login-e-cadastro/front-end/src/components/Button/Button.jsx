import './Button.css'

function Button(props) {
  return (
    <div className='button-container'>
      <button type={props.type} className={props.className}>{props.text}</button>
    </div>
  )
}

export default Button
