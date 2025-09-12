import './Section3.css'
import ImgConect from '../../assets/img-conect.jpeg'

function Section3() {
  return (
    <section className="section3">
      <div className="text-container-3">
        <h2>Conecte com amigos</h2>

        <p>Use a WVT para se conectar às pessoas que você conhece.</p>
        <p>A WVT pode conectar você a pessoa fora de seu circulo habitual.</p>
      </div>

      <div className="img-container-3">
        <img src={ImgConect} alt="" />
      </div>
    </section>
  )
}

export default Section3