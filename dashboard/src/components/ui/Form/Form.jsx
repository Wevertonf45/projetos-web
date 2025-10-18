import './Form.css'
import dollar from '../../../assets/dollar.png'


function Form({ children, text, icon: Icon, title, desc, onSubmit }) {
    return (
        <main className='form-container'>

            <div className='img-container'>
                <img src={dollar} alt="dolar-img" />
            </div>

            <div className="text-form">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>

            <form onSubmit={onSubmit}>
                <h1>{Icon && <Icon className="icon-user" />}{text}</h1>
                {children}
            </form>
        </main>
    )
}

export default Form
