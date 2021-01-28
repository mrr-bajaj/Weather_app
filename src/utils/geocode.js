const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXJiYWphaiIsImEiOiJja2tjMWYxMmswZmpmMm9vYWQ3MzllNGN0In0.BtBXwK0w1pbrtWp3Oi6lgA'

    request({url , json: true}, (error , response)=>{
        if(error){
            callback('Unable to connect to location sevice',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another service',undefined)
        }else{
            callback(undefined , {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode