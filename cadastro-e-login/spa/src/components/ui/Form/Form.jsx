import './Form.css'

function Form({ children, text, icon: Icon }) {
    return (
        <div className='form-container'>
            <form>
                <h1>
                    {Icon && <Icon className="icon-user" />}
                    {text}
                </h1>
                {children}
            </form>
        </div>
    )
}

export default Form
