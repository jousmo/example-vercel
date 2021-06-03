import Template from './templates/Template.js'

(async () => {
  const main = document.getElementById('main')
  main.innerHTML = await Template()
})()
