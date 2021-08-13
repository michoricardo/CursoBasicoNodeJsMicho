//un arreglo de objetos para simular una base de datos
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

getEmpleado(2, (err,empleado)=>{
    if(err){
        return console.log(err);
    }

getSalario(empleado,(err,resp)=>{
    if(err){
        return console.log(err);
    }
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}
);
});