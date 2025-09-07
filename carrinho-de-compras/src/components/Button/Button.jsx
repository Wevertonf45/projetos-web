import './Button.css'

function Button(props) {
  return (
    <button className='button-person'>
      {props.text}
    </button>
  )
}

export default Button