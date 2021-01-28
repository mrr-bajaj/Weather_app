const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5a81f88aa55a194b782039ae79c638c2&query=${latitude},${longitude}`

    request({url, json: true},(error,response)=> {  //property shorthand :url
        const {current} = response.body
        const {temperature, feelslike, humidity} = current
        if(response.body.error){
            callback('Unable to connect to weather service',undefined)
        }else if(error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined, `It is currently ${temperature} degree.It feels like ${feelslike} degree outside and humidity is ${humidity} %. `)
        }
    })
}

module.exports = forecast