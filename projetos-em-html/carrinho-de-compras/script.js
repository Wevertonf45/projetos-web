const botoes = document.querySelectorAll('.buy')
const subtotalEL = document.querySelector('.sub-total')
const totalEL = document.querySelector('.total')
let subtotal = 0

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.cards')
    const valor = Number(card.querySelector('.value').textContent)
    subtotal += valor

    subtotalEL.textContent = subtotal.toFixed(2)
    totalEL.textContent = subtotal.toFixed(2)
  })
})