import './Input.css'

function Input(props) {
    return (
        <div className='input-container'>
            <input
                type={props.text}
                placeholder={props.placeholder}
                name={props.name} />
        </div>
    )
}

export default Input
