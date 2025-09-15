import './Section4.css'
import TemplateSection from '../TemplateSection/TemplateSection'
import Button from '../Button/Button'

function Section4() {
    return (
        <TemplateSection className='section4'>
            <div className="text-container-4">
                <h1>Cuidados Restauradores Principais</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur consequatur error ratione cumque repudiandae quidem maxime, quis earum modi obcaecati suscipit voluptatibus corrupti distinctio sequi rerum dolores fugiat similique magnam.</p>

                <Button class='btn-4' text='Veja taxas' />
            </div>

            <div className="img-4"></div>
        </TemplateSection>
    )
}

export default Section4
