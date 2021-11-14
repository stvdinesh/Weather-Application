const request=require('request')
const forecast = (latitude,longitude,callback)=>
{
    const url='http://api.weatherstack.com/current?access_key=0b8613d7e39608a4fd6a5de1cda5b4d8&query='+latitude+','+longitude+'&units=m'
    request({ url, json:true},(error,{body}) => {
        if(error)
        {   
            callback("Please Check Your Connection",undefined)

        }
        else if(body.err)
        {
            callback('Location Not Found',undefined)
        }
        else
        {
        callback(undefined,'The Temperature is '+body.current.temperature)
        }
    })
}
module.exports=forecast