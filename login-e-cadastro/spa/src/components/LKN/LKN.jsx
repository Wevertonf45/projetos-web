import { Link } from "react-router-dom";
import './LKN.css'

function LKN(props) {
    return (
        <div className="links">
            <Link to={props.to}>{props.text}</Link>
        </div>
    )
}

export default LKN
