import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Pronto pra transformar seu visual?
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-foreground/80 mb-10">
            Reserve seu horário e venha descobrir por que a Corte & Arte é referência em estilo e autenticidade.
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            <Calendar className="mr-2" />
            Agendar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
