import { ReactEventHandler } from 'react'
import './Botao.css'

interface propsbotao{
    text: string
    id: string
    onClick?: ReactEventHandler
}

export default function Botao(props: propsbotao) {
    return (
        <button id={props.id} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

