'use client'

import { Botao, Form, Input, Lnk } from "@/components";
import { useForm } from 'react-hook-form'
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

interface FormData {
    email: string;
    password: string;
}

const fields = [
    { name: 'email', placeholder: 'E-mail', type: 'email' },
    { name: 'password', placeholder: 'Senha', type: 'password' }
] as const

export const schema = yup.object({
    email: yup.string().email('Informe um e-mail válido!').required('O e-mail é obrigatório!'),
    password: yup.string().required('A senha é obrigatória'),
})

function page() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })

    async function enviar(data: FormData) {
        try {
            const login = await api.post('/', data)
            const token = login.data.token
            localStorage.setItem('token', token)
            alert('Login efetuado com sucesso!')
            router.push('/list')

        } catch (error) {
            console.log(error);
            alert('Erro ao fazer login!')
        }
    }

    return (
        <main className='h-screen w-screen flex justify-center items-center'>
            <Form text='Fazer login' onSubmit={handleSubmit(enviar)}>
                {
                    fields.map((item) => (
                        <div>
                            <Input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                register={register(item.name)}
                            />
                            <div className="flex justify-center">
                                <span className="text-red-600">
                                    {errors[item.name]?.message}
                                </span>
                            </div>
                        </div>
                    ))
                }

                <div className='mt-[21px] flex justify-center'>
                    <Botao type="submit" text='Entrar' />
                </div>

                <div className='mt-[21px] flex justify-center mb-[31px]'>
                    <Lnk url='/cadastro' text='Não tem acesso? Cadastre-se!' />
                </div>
            </Form>
        </main>
    )
}

export default page
