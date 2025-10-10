import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-foreground">
            Transforme seu visual com <div className="text-amber-500">estilo e personalidade</div>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-foreground/90 max-w-2xl mx-auto font-light">
            Na Corte & Arte, cada corte é uma obra única — feita sob medida pra realçar sua personalidade.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="animate-scale-in"
            onClick={() => window.open('https://wa.me/000000000000', '_blank')}
          >
            <Calendar className="mr-2" />
            Agendar meu horário agora
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
