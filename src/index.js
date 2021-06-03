import Template from '@templates/Template.js'
import '@styles/main.css'
import '@styles/vars.sass'

(async () => {
  const main = document.getElementById('main')
  main.innerHTML = await Template()
})()
