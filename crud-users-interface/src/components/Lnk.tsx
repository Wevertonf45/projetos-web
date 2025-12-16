import Link from "next/link"

interface propsLnk {
    text: string;
    url: string;
}


function Lnk(props: propsLnk) {
    return (
        <Link
            className="font-bold hover:underline"
            href={props.url}>
            {props.text}
        </Link>
    )
}

export default Lnk
