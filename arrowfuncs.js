function sum(a,b)
{
    return a+b
}
//quitas la palabra funcion, la agregas a una variable y la igualas a los parametros y la arrow function va despues
let sum2=(a,b)=>
{   
    return a+b
}

let onelineSum2=(a,b)=> a+b

document.addEventListener('click',function()
{
    console.log('click')
})

document.addEventListener('click',()=>{
    console.log('click')
})

//por que no punto  y coma adentro de la funcion?