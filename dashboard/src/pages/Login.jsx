import { Shield } from "lucide-react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Link from "../components/ui/link";
import Button from "../components/ui/Button";

function Login() {
    return (
        <main className="h-screen w-screen flex justify-center items-center flex-col">
            <div className="text-white flex flex-col justify-center items-center mb-5">
                <div className="bg-t1 h-16 w-16 rounded-2xl flex justify-center items-center">
                    <Shield className="text-t2 h-12 w-12" />
                </div>


                <h1 className="font-bold text-[36px]">Acesso Seguro</h1>
                <h2 className="text-white/50 font-bold ">Entre com suas credencias</h2>
            </div>

            <Form title='Acessar o sistema'>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button text='Entrar'></Button>
                <Link to='/cadastro' text='Não tem acesso? Cadastre-se!'></Link>
            </Form>
        </main>
    )
}

export default Login