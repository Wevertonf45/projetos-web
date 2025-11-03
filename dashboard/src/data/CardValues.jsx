import { DollarSign, ArrowUpRight, ArrowDownRight, ArrowRightLeft  } from "lucide-react";


export const CardValues = [
    {
        title: 'Faturamento Bruto do Mês',
        value: 'R$ 680.000,00',
        icon: <DollarSign />
    },
    {
        title: 'Gastos do Mês',
        value: 'R$ 380.000,00',
        icon: <ArrowDownRight />
    },
    {
        title: 'Lucro Real',
        value: 'R$ 300.000,00',
        icon: <ArrowUpRight />
    },
    {
        title: 'Entrada e Saída de Caixa',
        value: 'R$ 215.000,00',
        icon: <ArrowRightLeft />
    }
]