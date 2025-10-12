import './GallerySection.css';
import Section from '../ui/Section/Section'

import gallery1 from '../../assets/gallery-1.jpg';
import gallery2 from '../../assets/gallery-2.jpg';
import gallery3 from '../../assets/gallery-3.jpg';
import gallery4 from '../../assets/gallery-4.jpg';
import gallery5 from '../../assets/gallery-5.jpg';
import gallery6 from '../../assets/gallery-6.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

function Gallery() {
    return (
        <Section className="gallery-section">
                <div className="text-gallery-container">
                    <h2>Transformações que <span>falam por si</span></h2>
                    <p>Confira o resultado de quem já passou pela Corte & Arte. Cada corte, uma identidade.</p>
                </div>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={image}
                                alt={`Transformação ${index + 1}`}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
        </Section>
    );
}

export default Gallery;
