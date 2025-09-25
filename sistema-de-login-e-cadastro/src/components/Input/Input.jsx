import './Input.css'

function Input(props) {
    return (
        <div className='input-container'>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Input
