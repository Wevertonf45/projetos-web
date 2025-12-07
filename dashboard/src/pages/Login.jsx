import { Shield } from "lucide-react";
import { Form, Input, Button, Link } from "../components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validators/loginschema";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) })
    const navigate = useNavigate()

    const enviar = async (data) => {
        try {
            await api.post('/', data)
            alert('Login efetuado com sucesso!')
            navigate('/dashboard')
            
        } catch (error) {
            console.log(error)
            alert('Erro ao fazer login!')
        }
    }

    return (
        <main className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="text-white flex flex-col justify-center items-center mb-5">
                <div className="bg-t1 h-16 w-16 rounded-2xl flex justify-center items-center">
                    <Shield className="text-t2 h-12 w-12" />
                </div>

                <h1 className="font-bold text-[36px]">Acesso Seguro</h1>
                <h2 className="text-white/50 font-bold ">Entre com suas credencias</h2>
            </div>

            <Form onSubmit={handleSubmit(enviar)} title='Acessar o sistema'>
                <Input type="email" placeholder="Email" name="email" register={register} autocomplete="email" />
                <div className="flex justify-center items-center mt-[-11px] mb-[7px]">
                    <span className="text-red-500 font-bold">{errors.email?.message}</span>
                </div>

                <Input type="password" placeholder="Senha" name="password" register={register} autocomplete="current-password" />
                <div className="flex justify-center items-center mt-[-11px] mb-[7px]">
                    <span className="text-red-500 font-bold">{errors.password?.message}</span>
                </div>

                <Button text='Entrar'></Button>

                <Link to='/cadastro' text='Não tem acesso? Cadastre-se!'></Link>
            </Form>
        </main>
    )
}

export default Login