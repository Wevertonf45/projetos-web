import connection from '../configs/database.js';


//Rota para listar os valores anuais
export const faturamentoAnual = async (req, res) => {
    try {
        //Acessar o banco de dados
        const [values] = await connection.execute('SELECT * FROM faturamento_anual');

        //Responder
        return res.status(200).json({ values });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


//Rota para mostrar os valores do mês
export const faturamentoMensal = async (req, res) => {
    try {
        //Acessar o banco de dados
        const [values] = await connection.execute('SELECT * FROM faturamento_mensal');

        //Responder
        return res.status(200).json({ values });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}