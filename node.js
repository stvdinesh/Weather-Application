const request=require('request')
const geocode=require('./geocode')
const forecast=require('./forecast')
const address=process.argv[2]
if(!address)
    {
        console.log("Provide Address")
    }
    else{geocode(address,(error,{latitude,longitude,location})=>{
        if(error)
        {
            return console.log(error)
        }
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
            return console.log(error)
            }
            console.log(location)
        })
     })
    }