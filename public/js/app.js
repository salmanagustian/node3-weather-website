const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
   event.preventDefault()

   const location = search.value;

   if(!location) {
      messageOne.textContent = 'Please provide an address.'
      messageTwo.textContent = ''

      return
   }

   messageOne.textContent = 'Loading ...'
   messageTwo.textContent = ''

   fetch('http://localhost:3000/weather?address=' + location).then((response) => {
      response.json().then((data) => {
         if(data.error) {
            messageOne.textContent = data.error

         } else {
            messageOne.textContent = 'Location: ' + data.location
            messageTwo.textContent = 'Temperature: ' + data.forecast.temperature
         }
      })
   })
})
