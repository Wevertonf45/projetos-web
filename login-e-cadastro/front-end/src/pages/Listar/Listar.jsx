import './Listar.css'
import { useEffect, useState } from 'react'
import api from '../../services/api'

function Listar() {
    const [users, setUsers] = useState([]) // estado para guardar usuários
    const [error, setError] = useState('') // estado para mensagens de erro

    useEffect(() => {
        async function loadUsers() {
            try {
                const token = localStorage.getItem('token')

                if (!token) {
                    setError('Token não encontrado! Faça login novamente.')
                    return
                }

                const response = await api.get('/listar', {
                    headers: { Authorization: `Bearer ${token}` }
                })

                setUsers(response.data.users)
            } catch (err) {
                console.error('Erro ao listar usuários:', err)
                setError('Erro ao carregar usuários. Verifique o token ou o servidor.')
            }
        }

        loadUsers()
    }, [])

    return (
        <main className="listar-container">
            <h1>Lista de usuários do sistema </h1>

            {
                users.map((item, index) => (
                    <div className='users-container'>
                        <div className='user'>
                            <p className='desc'>ID</p>
                            <p className='iten'>{item.id}</p>
                        </div>

                        <div className='user'>
                            <p className='desc'>Nome</p>
                            <p className='iten'>{item.name}</p>
                        </div>

                        <div className='user'>
                            <p className='desc'>Email</p>
                            <p className='iten'>{item.email}</p>
                        </div>
                    </div>
                ))
            }

        </main>
    )
}

export default Listar
