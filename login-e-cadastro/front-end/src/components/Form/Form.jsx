import './Form.css'

function Form({ title, children }) {
    return (
        <main className='form-container'>
            <form>
                <h1>{title}</h1>
                {children}
            </form>
        </main>
    )
}

export default Form
