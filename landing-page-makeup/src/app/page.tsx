import AboutSection from "@/components/AboutSection/AboutSection";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import GallerySection from "@/components/GallerySection/GallerySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import LocationSection from "@/components/LocalizationSection/LocalizationSection";
import Services from "@/components/ServicesSection/ServicesSection";
import TestimonialsSection from "@/components/TestmonialSection/TestmonialSection";
import CTASection from "@/components/CTASection/CTASection"
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <BenefitsSection />
            <GallerySection />
            <TestimonialsSection />
            <Services />
            <LocationSection />
            <CTASection />
            <Footer />
        </main>
    )
}
