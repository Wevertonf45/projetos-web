import { Scissors, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Corte Personalizado",
    description: "Técnica e criatividade para cada tipo de cabelo.",
  },
  {
    icon: Layers,
    title: "Barba e Design",
    description: "Contornos precisos, hidratação e acabamento perfeito.",
  },
  {
    icon: Sparkles,
    title: "Estilização & Finalização",
    description: "Produtos premium e técnicas exclusivas para realçar sua identidade.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-gold transition-smooth bg-card hover:shadow-gold-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-xl text-center text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Quero experimentar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
