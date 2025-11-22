import './GallerySection.css'
import Section from '../ui/Section/Section'
import Image from 'next/image'
import { images } from '@/data/imagesData'


function GallerySection() {
    return (
        <Section id='gallery-section'>
            <div className="text-gallery-container">
                <h2>Resultados que <span>falam por si</span></h2>
                <p>Veja algumas das nossas transformações</p>
            </div>

            <div className="images-container">
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.alt}
                    />
                ))}
            </div>
        </Section>
    )
}

export default GallerySection
