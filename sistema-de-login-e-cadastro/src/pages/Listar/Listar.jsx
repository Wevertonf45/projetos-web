import { useEffect, useState } from "react";
import api from "../../services/api";
import './Listar.css'

function Listar() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loader() {
            const token = localStorage.getItem('token');
            console.log("Token:", token);

            try {
                const response = await api.get('/listar', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(response.data); // ✅ Dentro do try
            } catch (error) {
                console.error("Erro ao listar:", error.response?.data || error.message);
            }
        }

        loader();
    }, []);

    return (
        <div className="list">
            <h1>Lista de Usuários</h1>
            {users.length === 0 ? (
                <p>Nenhum usuário encontrado.</p>
            ) : (
                <ul className="users-list">
                    {users.map((item) => (
                        <li key={item.id}>
                            {item.user} - {item.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Listar;
