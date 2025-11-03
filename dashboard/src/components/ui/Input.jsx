function Input({ type, placeholder }) {
    return (
        <div className="py-0 px-10px">
            <input
                className="bg-quar rounded-2xl p-2 w-full mb-4 placeholder-white/50 px-[15px] outline-none text-white"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input
