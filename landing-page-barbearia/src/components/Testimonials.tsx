import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael S.",
    text: "Melhor barbearia da cidade! Atendimento top e corte impecável.",
    rating: 5,
  },
  {
    name: "Anderson M.",
    text: "Aqui é onde sempre volto. Cada corte parece feito sob medida.",
    rating: 5,
  },
  {
    name: "Carlos D.",
    text: "Profissionalismo e qualidade excepcionais. Recomendo demais!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:border-gold transition-smooth hover:shadow-gold-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 text-center mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gold text-center font-semibold">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
