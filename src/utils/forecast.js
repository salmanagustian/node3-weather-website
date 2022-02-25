const request = require('request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=50e249484b6addbc8a81c0fa47c2e491&query=' + latitude + ',' +longitude;

   request({ url, json:true }, (error, { body }) => {
      if(error) {
         callback('Unable to connect to weather service!', undefined)
      } else if(body.error) {
         callback('Unable to find location', undefined)
      } else {
         callback(undefined, {
            currentLocation: body.location.name,
            temperature: body.current.temperature + ' Celcius',
         });
      }
   })
}

module.exports = forecast