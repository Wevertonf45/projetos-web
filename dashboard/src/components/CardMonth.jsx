import Card from "./ui/Card";
import { CardValues } from "../data/CardValues.jsx";

function CardMonth() {
    return (
        <section className="px-4 sm:px-0">
            <h2 className="mb-8 text-white font-bold text-3xl text-center sm:text-left">Visão Geral do Mês</h2>

            <div className=" flex  flex-col items-center gap-4  sm:flex-row sm:justify-around">
                {CardValues.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default CardMonth;
