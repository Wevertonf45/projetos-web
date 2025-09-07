import Button from '../Button/Button'
import './Hamburguer.css'

function Hamburguer(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.img} alt='' />
      </div>

      <h1>{props.title}</h1>
      <p id='desc'>{props.desc}</p>

      <div className="preco-container">
        <p id='real'>R$</p>
        <p id='value'>{props.value}</p>
      </div>

      <div className="button-container-hamb">
        <Button text='Comprar' />
      </div>
    </div>
  )
}

export default Hamburguer