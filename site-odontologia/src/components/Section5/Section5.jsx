import Button from '../Button/Button'
import TemplateSection from '../TemplateSection/TemplateSection'
import './Section5.css'

function Section5() {
  return (
    <TemplateSection className='section5'>
      <div className="img-5"></div>

      <div className="text-container-5">
        <h1>Cuidados Preventivos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis iusto totam exercitationem, ratione ipsam magni. Quisquam consectetur eligendi porro, quia mollitia perspiciatis, nesciunt iste ex, corrupti doloremque animi adipisci?</p>

        <div className="button-container-5">
            <Button class='btn-5' text='Veja Taxas'/>
        </div>
      </div>
    </TemplateSection>
  )
}

export default Section5
