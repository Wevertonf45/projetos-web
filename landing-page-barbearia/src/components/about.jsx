const About = () => {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Corte & Arte: Onde o estilo encontra a precisão.
                    </h2>
                    <div className="h-1 w-20 bg-gold mx-auto mb-8" />
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                        Mais do que uma barbearia, somos um espaço de atitude.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                        Aqui, cada detalhe importa — do atendimento personalizado ao acabamento impecável.
                    </p>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Nosso compromisso é deixar você com o visual certo pra qualquer ocasião, com autenticidade e confiança.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
