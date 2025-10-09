import './Input.css'

function Input({ type, placeholder, icon, register, name }) {
    return (
        <div className='input-container'>
            <span className='icon'>{icon}</span>
            <input type={type} placeholder={placeholder} {...register(name)} />
        </div>
    )
}

export default Input
