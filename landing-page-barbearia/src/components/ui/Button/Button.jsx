import './Button.css'

function Button(props) {
    return (
        <div className='button'>
            <button className={props.className} onClick={() => window.open('https://wa.me/000000000000', '_blank')}>{props.text}</button>
        </div>
    )
}

export default Button
