import './Button.css'

function Button (props) {
  return (
    <div className="button-container">
    <button>
      {props.text}
    </button>
    </div>
  )
}
export default Button