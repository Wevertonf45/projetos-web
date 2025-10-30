function Button({ text }) {
    return (
        <div className="flex justify-center items-center">
            <button className="bg-sec font-bold my-4 w-[50%] rounded-2xl p-2 cursor-pointer transition ease-in-out duration-300 hover:bg-sec/60">
                {text}
            </button>
        </div>
    )
}

export default Button
