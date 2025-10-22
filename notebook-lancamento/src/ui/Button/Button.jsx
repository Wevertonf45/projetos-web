import './Button.css'

function Button(props) {
    return (
        <div className='button-container' id={props.id}>
            <button>{props.text}</button>
        </div>
    )
}

export default Button
