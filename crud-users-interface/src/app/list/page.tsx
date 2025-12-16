'use client'

import { api } from "@/services/api"
import { useState, useEffect } from "react"

interface Users {
    id: number;
    name: string;
    email: string;
}

function page() {
    const [users, setUsers] = useState<Users[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        async function loadAdmins() {
            try {
                const token = localStorage.getItem('token')
                if (!token) {
                    setError('Token não encontrado! Faça login novamente.')
                    return
                }

                const response = await api.get('/list', {
                    headers: { Authorization: `Bearer ${token}` }
                })

                setUsers(response.data.users)

            } catch (error) {
                console.error('Erro ao listar admins!', error)
            }
        }

        loadAdmins()
    }, [])

    return (
        <main className="">
            <h1 className="text-white font-bold text-4xl text-center mb-[35px]">Lista de Administradores</h1>
            <div className="p-[31px]">
                {users.map((item, index) => (
                    <div key={index} className="flex bg-terc/50 mb-[21px] font-bold items-center px-[11px] rounded-2xl">
                        <div className="mr-[21px]">
                            <p>ID:</p>
                            <p>{item.id}</p>
                        </div>

                        <div className="mr-[21px]">
                            <p>Name:</p>
                            <p>{item.name}</p>
                        </div>

                        <div className="mr-[21px]">
                            <p>E-Mail:</p>
                            <p className="">{item.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default page
