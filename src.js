const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode=require('./geocode')
const forecast=require('./forecast')
console.log(forecast)

const app=express()
const port=process.env.PORT || 3000

const parpath=path.join(__dirname,'./partials')
const viewspath=path.join(__dirname,'./views')

app.use(express.static(__dirname + '/public'));
app.set('views',viewspath)
app.set('view engine','hbs')
hbs.registerPartials(parpath)


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather',
        body:'This Page shows Weather io',
        name:'Dinesh'
    })
})

app.get('/help',(req,res) =>
{
    res.render('help',{
        title:'Help',
        body:"This is Help Section",
        name:"Dinesh"
    })
})

app.get('/about',(req,res) =>
{
    res.render('about',{
        title:'About',
        body:"This is About Section",
        name:"Dinesh"
    })
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:"Please Enter Location"
        })
    }
geocode(req.query.address,(error,{latitude,longitude,location})=>
{   
    if(error)
    {
        return res.send({error})
    }
    forecast(latitude,longitude,(error,forecastData)=>
    {   
        if(error)
    {
        return res.send({error})
    }
      res.send({
      forecast:forecastData,  
      loc:location, 
    })
})
})
})
app.listen(port, () =>
{
    console.log('Server is up on port')
})