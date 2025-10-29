import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useFaturamentoAnual from "../../hooks/useFaturamentoAnual.js";

function Graphic() {
    const faturamentoAnual = useFaturamentoAnual();
     const faturamentoMesAtual = [
        { semana: "sem1", faturamento: 20000, gastos: 15000 },
        { semana: "sem2", faturamento: 22000, gastos: 16000 },
        { semana: "sem3", faturamento: 21000, gastos: 15500 },
        { semana: "sem4", faturamento: 23000, gastos: 17000 },
    ];


    return (
        <section>
            <h2 className="text-white font-bold text-3xl mb-8">Desempenho mensal</h2>

            <div className="bg-terc flex justify-center items-center p-5 flex-col rounded-2xl">
                <h2 className="text-white font-bold text-3xl mb-4">Desempenho Atual do Mês</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart width={1400} height={300} data={faturamentoMesAtual} barSize={70}>
                        <Bar dataKey="faturamento" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="gastos" fill="red" radius={[10, 10, 0, 0]} />
                        <XAxis dataKey="semana" />
                        <YAxis />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-10 mb-10 bg-terc w-full p-4 rounded-2xl">
                <h2 className="mb-4 text-white font-bold text-3xl text-center">Evolução de Rendimentos</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart width={1300} height={300} data={faturamentoAnual}>
                        <Line dataKey="faturamento" stroke="green" strokeWidth={4} />
                        <Line dataKey="gastos" stroke="red" strokeWidth={4} />
                        <CartesianGrid stroke="#c0c0c0" />
                        <XAxis dataKey="mes" stroke="#c0c0c0" />
                        <YAxis dataKey="faturamento" stroke="#c0c0c0" />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}

export default Graphic
