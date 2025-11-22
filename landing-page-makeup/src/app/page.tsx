import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import GallerySection from "@/components/GallerySection/GallerySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import TestimonialsSection from "@/components/TestmonialSection/TestmonialSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BenefitsSection />
            <GallerySection />
            <TestimonialsSection />
        </main>
    )
}
