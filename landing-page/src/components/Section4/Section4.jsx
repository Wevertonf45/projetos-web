import './Section4.css'
import Img4 from '../../assets/image-04.jpeg'

function Section4() {
  return (
    <section className="section4">
      <div className="img-container-4">
        <img src={Img4} alt="foto-4" />
      </div>

      <div className="text-container-4">
        <h2>Mantenha contato</h2>
        <p>
          O sistema de mensagem da WVT substitui
          a mensagem de texto, a chamada e a
          mensagem de voz.
        </p>

        <p>
          Nossos fóruns irão mudar a maneira como
          você lida com grupos de interesses e
          debates virtuais.
        </p>
      </div>
    </section>
  )
}

export default Section4