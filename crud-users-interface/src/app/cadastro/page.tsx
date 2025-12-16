//Importações
'use client'
import { Botao, Form, Input, Lnk } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from '@/services/api.js'
import { useRouter } from "next/navigation";
import { FormData, fields, schema } from '@/forms/cadastroForms'
//=======================================================================================

function page() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) })

    async function enviar(data: FormData) {
        try {
            await api.post('/cadastro', data)
            alert('Sucesso ao cadastrar!')
            router.push('/')

        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar!')
        }
    }


    return (
        <main className="h-screen w-screen flex justify-center items-center">
            <Form text="Cadastrar-se" onSubmit={handleSubmit(enviar)}>
                {fields.map((item) => (
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
                ))}


                <div className="mt-[21px] flex justify-center items-center mb-[15px]">
                    <Botao type="submit" text="Cadastrar" />
                </div>

                <div className="flex justify-center items-center mb-[15px]">
                    <Lnk url="/" text="Já possui acesso? Faça login!" />
                </div>
            </Form>
        </main>
    )
}

export default page
