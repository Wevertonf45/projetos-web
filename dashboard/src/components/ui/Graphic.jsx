import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Graphic() {
    const faturamentoAnual = [
        { mes: "Janeiro", faturamento: 12000, gastos: 8000 },
        { mes: "Fevereiro", faturamento: 15000, gastos: 9500 },
        { mes: "Março", faturamento: 18000, gastos: 11000 },
        { mes: "Abril", faturamento: 14000, gastos: 9000 },
        { mes: "Maio", faturamento: 20000, gastos: 12000 },
        { mes: "Junho", faturamento: 17000, gastos: 10000 },
        { mes: "Julho", faturamento: 19000, gastos: 11500 },
        { mes: "Agosto", faturamento: 22000, gastos: 13000 },
        { mes: "Setembro", faturamento: 16000, gastos: 9500 },
        { mes: "Outubro", faturamento: 21000, gastos: 12500 },
        { mes: "Novembro", faturamento: 25000, gastos: 14000 },
        { mes: "Dezembro", faturamento: 30000, gastos: 16000 }
    ];

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
