import { useEffect, useState } from "react";
import api from "../services/api";


function useFaturamentoMensal() {
    const [faturamentoMensal, setFaturamentoMensal] = useState([]);

    useEffect(() => {
        async function getFaturamentoMensal() {
            try {
                const response = await api.get('/faturamento-mensal')
                setFaturamentoMensal(response.data.values)

            } catch (error) {
                alert('Erro ao buscar dados do faturamento mensal')
                console.log(error)
            }
        }

        getFaturamentoMensal()
    }, [])

    return faturamentoMensal
}

export default useFaturamentoMensal