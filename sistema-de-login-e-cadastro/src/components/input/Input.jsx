import './Input.css'

function Input({type, placeholder,register, name, icon}) {
    return (
        <div className='input-container'>
            <div className='input'>
                <span className='icon-input'>{icon}</span>
                <input type={type} placeholder={placeholder} {...register(name)}/>
            </div>
        </div>
    )
}

export default Input