import './style.css'

const elementApp = document.querySelector('[data-js="app"]')
elementApp.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-js="link"]')
link.addEventListener('click', (e) => {
  e.preventDefault()
  elementApp.classList.toggle('hide')
  e.target.textContent = elementApp.classList.contains('hide')
    ? 'Exibir'
    : 'Esconder'
  // or...:
  // const display = elementApp.style.display
  // elementApp.style.display = display === 'none' ? 'block' : 'none'
  // console.log('display', elementApp.style.display)
})
