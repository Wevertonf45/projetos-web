import './Input.css'

function Input (props) {
  return (
    <div className="input-container">
      <input placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Input