let empleados = [{
    id:1,
    nombre:'Ricardo'
    },
    {
    id:2,
    nombre:'Fabiola'
    },
    {
    id:3,
    nombre:'Adolfo'
    }
    ]
    let salarios = [
    {
        id:1,
        salario:40000
    },
    {
        id:2,
        salario:12000
    }
    ]
//Tengo este callback y lo paso a una promise
let getEmpleado = (id,callback) =>{
    let empleadoDB = empleados.find (empleado => empleado.id === id)
    console.log(empleadoDB);
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`)
    }
    else{
        callback(null,empleadoDB);
    }
}


//promise

let getEmpleadopromise = (id)=>
{
    //una promesa tiene dos callbacks de argumentos
    return new Promise((resolve,reject)=>
    {
        let empleadoDB=empleados.find(argumentoIterador => argumentoIterador.id===id )
        if (!empleadoDB)
        {
            reject(`No existe un empleado con el id ${id}`)            
        }
        else{
            resolve(empleadoDB)
            //Si se cumple, se manda el callback
        }
    }
    );
}

getEmpleadopromise(15).then(cualquierargumento=>
    {
        console.log('El empleado es:', cualquierargumento)
    },(errawrr)=>{
        console.log(errawrr)
    }
    )

//callback getSalario
let getSalario = (empleado,callback)=>{
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    

    if(!salarioDB){
        callback(`No se encontro un salario para el usuario con el nombre ${empleado.nombre}`)
    }
    else{
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioDB.salario,
            id:empleado.id
        });
    }
}
//lo cambio a una promesa
let getSalarioPromise=(empleado)=>
{
    return new Promise((resolve,reject)=>
    {
        let salarioDB2=salarios.find(variablequeitera=>variablequeitera.id===salarios.id)
        if(!salarioDB2)
        {
            reject(`No se encontró un salario para el id: ${empleado.nombre}`)
        }
        else
        {
            resolve(salarioDB2)
        }
    }
    )
}

getSalarioPromise(2).then(argumentots=>{
    console.log('El salario que buscas es de',argumentots)
},(errorsote)=>
{
    console.log(errorsote)
}
    )