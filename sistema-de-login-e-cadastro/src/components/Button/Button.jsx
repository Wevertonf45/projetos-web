import'./Button.css'

function Button(props) {
  return (
    <div className='button-container'>
      <button type='submit'>{props.text}</button>
    </div>
  )
}

export default Button
