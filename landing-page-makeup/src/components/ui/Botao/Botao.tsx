import './Botao.css'

interface propsbotao{
    text: string
}

export default function Botao(props: propsbotao) {
    return (
        <button>
            {props.text}
        </button>
    )
}
