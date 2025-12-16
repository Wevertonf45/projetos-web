import { UseFormRegisterReturn } from "react-hook-form";

interface propsInput {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegisterReturn;
}

function Input(props: propsInput) {
    return (
        <div className="flex justify-center mt-[25px] w-full">
            <input
                className="border border-white/50 rounded-2xl w-[80%] p-[11px] outline-none"
                type={props.type}
                placeholder={props.placeholder}
                {...props.register}
            />
        </div>
    )
}

export default Input
