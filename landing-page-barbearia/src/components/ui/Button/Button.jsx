import './Button.css'

function Button(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <button>
                {props.text}
            </button>
        </div>
    )
}

export default Button
