import { Link } from "react-router-dom"

function link(props) {
    return (
        <div className="flex justify-center">
            <Link to={props.to} className="text-white font-bold hover:underline">
                {props.text}
            </Link>
        </div>
    )
}

export default link
