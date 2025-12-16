import { ReactNode } from "react"

interface propsBotao {
    text: string;
    id?: string;
    type: "submit"
}

function Botao(props: propsBotao) {
    return (
        <button
            type={props.type}
            className="bg-terc text-black font-bold p-[9px] rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-terc/50 w-[50%]"
            id={props.id}>
            {props.text}
        </button>
    )
}

export default Botao
