function Form({ children, title, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="bg-terc w-[420px] p-5 rounded-2xl">
            <h2 className="text-white text-center font-bold mb-5 text-[25px]">{title}</h2>
            {children}
        </form>
    )
}

export default Form
