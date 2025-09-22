import './Form.css'

function Form({ title, children, onSubmit }) {
    return (
        <main>
            <form onSubmit={onSubmit}>
                <h2>{title}</h2>
                {children}
            </form>
        </main>
    )
}

export default Form
