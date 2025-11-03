import { Shield } from "lucide-react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "../components/ui/link";

function Cadastro() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center mb-5 mt-10">
                <div className="border border-sec h-16 w-16 flex justify-center items-center rounded-2xl bg-sec/30 cursor-pointer mb-3">
                    <Shield className="text-sec h-12 w-12" />
                </div>

                <h1 className="text-white font-bold text-3xl mb-2.5">Acesso Seguro</h1>
                <h2 className="text-white/50 font-bold ">Entre com suas credencias</h2>
            </div>

            <Form title='Obter acesso ao sistema'>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button text='Cadastrar'></Button>
                <Link to='/login' text='Já tem acesso? Entrar'></Link>
            </Form>
        </main>
    )
}

export default Cadastro
