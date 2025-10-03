import './Form.css'

function Form({ title, children, onSubmit }) {
    return (
        <main className='form-container'>
            <form onSubmit={onSubmit}>
                <h1>{title}</h1>
                {children}
            </form>
        </main>
    )
}

export default Form
