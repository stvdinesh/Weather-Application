const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic3RldmVkaW5lc2giLCJhIjoiY2t2bjY3cXJmMGhtdTJwanAyNHJkaWZzaSJ9.CkwhkX8IMjV1CqV6jfQDWA&limit=1'
    request({ url, json:true},(error,{body}) => {
        if(error)
        {   
            callback("Please Check Your Connection",undefined)
        }
        else if(body.features.length===0)
        {
            callback('Location Not Found',undefined)
        }
        else
        {
            console.log(body.features[0].place_name)
        callback(undefined,{
            latitude:body.features[0].center[0],
            longitude:body.features[0].center[1],
            location:"You searched for :"+body.features[0].place_name
        })
        }
}) 
}
module.exports=geocode