import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Onde estamos
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-xl text-foreground/80">
            Venha nos visitar e viva a experiência Corte & Arte.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border-2 border-gold shadow-gold-sm animate-fade-in h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.196683493118!2d-46.65360368502145!3d-23.561414984682867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1234567890123!5m2!1sen!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Corte & Arte"
            />
          </div>
          
          {/* Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-gold transition-smooth">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Endereço</h3>
                <p className="text-foreground/70">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-gold transition-smooth">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Horário de Funcionamento</h3>
                <p className="text-foreground/70">
                  Segunda a sábado<br />
                  09h às 20h
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-gold transition-smooth">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Contato</h3>
                <p className="text-foreground/70">
                  (11) 99999-9999<br />
                  contato@cortearte.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
