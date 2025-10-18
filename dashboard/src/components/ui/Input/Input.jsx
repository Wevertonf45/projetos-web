import './Input.css'

function Input({ type, placeholder, name, register, autoComplete }) {
    return (
        <div className='input-container'>
            <input autoComplete={autoComplete}
                type={type}
                placeholder={placeholder}
                name={name}
                {...register(name)}
            />
        </div>
    )
}

export default Input
