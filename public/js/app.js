console.log('client loaded')

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msgone=document.querySelector('#mess1')
const msgtwo=document.querySelector('#mess2')

weatherForm.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location=search.value 
    msgone.textContent='Loading...'

    fetch('/weather?address='+location).then((res)=>{
    res.json().then((data)=>
    {
        if(data.error)
        {
            msgone.textContent=data.error
        }
        else
        {
            msgone.textContent=data.loc
            msgtwo.textContent=data.forecast
        }
    })
})
}) 