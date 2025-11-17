import Section from "./ui/Section"

function HeroSection() {
    return (
        <Section className="bg-[url('/image-hero.jpg')] min-h-screen bg-cover bg-center bg-black/40 bg-blend-darken flex justify-center items-center">
            <div>
                <h1 className="text-white text-center text-3xl font-bold">
                    Maquiagem que destaca o que você 
                    <span className="text-terc"> tem de mais bonito</span>
                </h1>
            </div>
        </Section>
    )
}

export default HeroSection
