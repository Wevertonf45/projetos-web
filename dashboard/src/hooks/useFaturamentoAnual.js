import { useEffect, useState } from "react";
import api from "../services/api";


function useFaturamentoAnual() {
    const [faturamentoAnual, setFaturamentoAnual] = useState([]);

    useEffect(() => {
        async function getFaturamentoAnual() {
            try {
                const response = await api.get('/faturamento-anual')
                setFaturamentoAnual(response.data.values)

            } catch (error) {
                alert('Erro ao buscar dados do faturamento anual')
                console.log(error)
            }
        }

        getFaturamentoAnual()
    }, [])

    return faturamentoAnual
}

export default useFaturamentoAnual