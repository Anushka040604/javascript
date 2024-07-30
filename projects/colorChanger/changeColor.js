const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")
buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        console.log(event.target.id)
        if(event.target.id==='red')
        {
            body.style.backgroundColor='red';
        }
        else if(event.target.id==='yellow')
        {
            body.style.backgroundColor='yellow';
        }
        else if(event.target.id==='grey')
        {
                body.style.backgroundColor='grey';
            }
        else{
            body.style.backgroundColor='crimson';
        }
    })
})
