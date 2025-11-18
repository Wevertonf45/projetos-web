import './Botao.css'

interface propsbotao{
    text: string
    id: string
}

export default function Botao(props: propsbotao) {
    return (
        <button id={props.id}>
            {props.text}
        </button>
    )
}
