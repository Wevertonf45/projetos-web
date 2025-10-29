import Card from "./ui/Card"
import useFaturamentoMensal from "../hooks/useFaturamentoMensal"
import { DollarSign } from "lucide-react";


function CardMonth() {
    const faturamentoMensal = useFaturamentoMensal();
    const valoresFaturamento = faturamentoMensal.map(item => item.faturamento);
    const valoresGastos = faturamentoMensal.map(item => item.gastos);
    const valoresLucro = faturamentoMensal.map(item => item.lucro);

    return (
        <section className="px-4 sm:px-0">
            <h2 className="mb-8 text-white font-bold text-3xl text-center sm:text-left">Visão Geral do Mês</h2>
            <div className="flex flex-wrap justify-center sm:justify-around gap-4">
                <Card title="Faturamento Bruto do Mês" value={`R$ ${valoresFaturamento}`} icon={<DollarSign />} />
                <Card title="Gastos do Mês" value={`R$ ${valoresGastos}`} icon={<DollarSign />} />
                <Card title="Lucro do Mês" value={`R$ ${valoresLucro}`} icon={<DollarSign />} />
            </div>
        </section>

    )
}

export default CardMonth
