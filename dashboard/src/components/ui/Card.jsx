
function Card({ title, value, icon }) {
    return (
        <div className="bg-terc w-[380px] h-[130px] mb-10 p-5 border border-transparent rounded-2xl flex justify-between items-center hover:border hover:border-cyan-400 cursor-pointer transition ease-in-out duration-300">
            <div>
                <p className="text-text font-bold">{title}</p>
                <p className="text-3xl text-white font-bold text-shadow-sm text-shadow-sec">{value}</p>
            </div>

            <div className="border border-sec h-16 w-16 rounded-2xl flex justify-center items-center text-sec">
                {icon}
            </div>
        </div>
    )
}

export default Card;