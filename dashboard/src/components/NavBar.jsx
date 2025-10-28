import { BarChart3 } from "lucide-react";

function NavBar() {
    return (
        <header className="text-white border-b border-sec/20 p-3">
            <div>
                <div className="flex items-center mb-2">
                    <div className="border border-sec rounded-xl flex justify-center items-center mr-2 p-1">
                        <BarChart3 className="text-sec h-8 w-8" />
                    </div>
                    
                    <h1 className="text-4xl font-bold">Tech<span className="text-sec font-bold">Control</span></h1>
                </div>

                <h2 className="text-2xl font-bold mb-1">Painel de Gestão Financeira Inteligente</h2>
                <p className="text-text font-medium">Acompanhe o desempenho financeiro da sua empresa de tecnologia em tempo real e tome decisões baseadas em dados.</p>
            </div>
        </header>
    )
}

export default NavBar