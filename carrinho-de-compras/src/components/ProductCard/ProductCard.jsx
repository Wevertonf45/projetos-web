import Button from '../Button/Button'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.img} alt="bb" />
      </div>

      <div className="text-container">
        <h1>{props.title}</h1>
        <p className="desc">{props.desc}</p>
      </div>

      <div className="value-container">
        <p className="real">R$</p>
        <p className="value">{props.value}</p>
      </div>

      <div className="button-container-card">
        <Button onClick={props.onComprar} text='Adicionar'/>
      </div>
    </div>
  )
}

export default ProductCard