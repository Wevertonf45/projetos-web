import './lnk.css'
import { Link } from 'react-router-dom'

function Lnk(props) {
    return (
        <div className='link-container'>
            <Link to={props.to}>
                {props.text}
            </Link>
        </div>
    )
}

export default Lnk
