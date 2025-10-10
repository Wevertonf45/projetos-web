import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transformações que falam por si
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6" />
          <p className="text-xl text-foreground/80">
            Confira o resultado de quem já passou pela Corte & Arte. Cada corte, uma identidade.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-gold transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Transformação ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
