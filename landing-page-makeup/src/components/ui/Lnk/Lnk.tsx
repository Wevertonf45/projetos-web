import Link from "next/link"

interface propsLink {
    url: string,
    text: string
}

export default function Lnk(props: propsLink) {
    return (
        <Link href={props.url}>{props.text}</Link>
    )
}
