import Template from './templates/Template.js'
import './styles/main.css'

(async () => {
  const main = document.getElementById('main')
  main.innerHTML = await Template()
})()
