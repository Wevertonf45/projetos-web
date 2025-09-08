import Button from '../Button/Button'
import './Resume.css'

function Resume({subtotal, total}) {
  
  return (
    <div className="resume">
      <h1>Resumo da compra:</h1>

      <div className="value-resume">

        <div className='subtotal-container'>
          <p className='subtotal'>Sub-total:</p>
          <p className="real">R$</p>
          <p className='value-subtotal'>{subtotal.toFixed(2)}</p>
        </div>

        <div className='total-container'>
          <p className='total'>Total:</p>
          <p className="real">R$</p>
          <p className='value-total'>{total.toFixed(2)}</p>
        </div>

        <div className="button-resume">
          <Button text='Finalizar compra' />
        </div>
      </div>
    </div>
  )
}

export default Resume