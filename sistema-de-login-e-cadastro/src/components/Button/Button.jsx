import './Button.css'

function Button(props) {
  return (
    <div className='button-container'>
      <button className={props.className}>{props.text}</button>
    </div>
  )
}

export default Button
