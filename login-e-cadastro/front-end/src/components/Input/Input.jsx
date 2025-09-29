import './Input.css'

function Input(props) {
    return (
        <div className='input-container'>
            <span className='icon'>{props.icon}</span>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
