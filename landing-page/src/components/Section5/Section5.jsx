import Img5 from '../../assets/image-05.jpeg'
import './Section5.css'

function Section5() {
  return (
    <section className="section5">
      <div className="text-container-5">
        <h2>Construa sua base social</h2>
        <p>
          A WVT apresenta ideias e espaços que
          podem deixar você interessado.
        </p>

        <p>
          Você pode usar esses espaços para conhecer
          novas pessoas e criar conexões.
        </p>
      </div>

      <div className="img-container-5">
        <img src={Img5} alt="" />
      </div>
    </section>
  )
}

export default Section5