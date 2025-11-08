import { Shield } from "lucide-react";
import { Form, Input, Button, Link } from "../components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroSchema } from "../validators/cadastroschema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(cadastroSchema) })
    const navigate = useNavigate()

    const enviar = async (data) => {
        try {
            await api.post('/cadastro', data)
            alert('Cadastro feito com sucesso!')
            navigate('/')

        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar usuário!')
        }
    }

    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center mb-5 mt-10">
                <div className="border border-sec h-16 w-16 flex justify-center items-center rounded-2xl bg-sec/30 cursor-pointer mb-3">
                    <Shield className="text-sec h-12 w-12" />
                </div>

                <h1 className="text-white font-bold text-3xl mb-2.5">Acesso Seguro</h1>
                <h2 className="text-white/50 font-bold ">Entre com suas credencias</h2>
            </div>

            <Form onSubmit={handleSubmit(enviar)} title='Obter acesso ao sistema'>
                <Input type="text" placeholder="Nome" name="name" register={register} autocomplete="username" />
                <div className="flex justify-center items-center mt-[-11px] mb-[7px]">
                    <span className="text-red-500 font-bold">{errors.name?.message}</span>
                </div>


                <Input type="email" placeholder="Email" name="email" register={register} autocomplete="email" />
                <div className="flex justify-center items-center mt-[-11px] mb-[7px]">
                    <span className="text-red-500 font-bold">{errors.email?.message}</span>
                </div>


                <Input type="password" placeholder="Senha" name="password" register={register} autocomplete="current-password" />
                <div className="flex justify-center items-center mt-[-11px] mb-[7px]">
                    <span className="text-red-500 font-bold">{errors.password?.message}</span>
                </div>


                <Button text='Cadastrar'></Button>

                <Link to='/login' text='Já tem acesso? Entrar'></Link>
            </Form>
        </main>
    )
}

export default Cadastro
