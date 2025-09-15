import './Input.css'

function Input (props) {
  return (
    <div className="input-container">
      <input placeholder={props.placeholder} type={props.type} required />
    </div>
  )
}

export default Input