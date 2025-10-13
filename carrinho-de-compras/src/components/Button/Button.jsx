import './Button.css'

function Button({ text, className, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            <button>
                {text}
            </button>
        </div>
    )
}

export default Button