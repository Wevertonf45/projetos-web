interface propsForm {
    children: React.ReactNode;
    text: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form(props: propsForm) {
    return (
        <form 
        className="bg-sec w-[420px] text-white rounded-2xl"
        onSubmit={props.onSubmit}>
            <h1 className='h-[63px] font-bold flex items-center justify-center text-3xl'>{props.text}</h1>
            {props.children}
        </form>
    )
}

export default Form
