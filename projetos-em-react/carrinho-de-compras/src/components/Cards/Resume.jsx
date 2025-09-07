import './Resume.css'

function Resume () {
  return (
    <div className='resume-card'>
      <h1>Resumo da compra:</h1>

      <div className="subtotal">
        <p id="real-resume">Sub-total:</p>
        <span>R$</span><p id="subtotal-resume"></p>
      </div>

      <div className="total">
        <p id="real-resume">total:</p>
        <span>R$</span><p id="total-resume"></p>
      </div>
    </div>
  )
}

export default Resume