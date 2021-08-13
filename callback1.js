setTimeout(function()
{
    console.log('Soy un callback de timeout');
},3000);
/*
es el callback y luego de argumento se usa la funcion (en este caso no tenía argumentos)
luego lo que se hace adentro de la funcion y luego el tiempo del timeout
 */
setTimeout(()=>{
    console.log('Soy un callback pero con flecha gorda')
},4000); 
/* la flecha gorda reemplaza a la palabra function justo despues de los argumentos
de la funcion que vamos a ejecutar.
después de la flecha, van las arrows de lo que queremos hacer*/

let getUsuarioporID= (id,callback)=>
{
    let usuario = {
        nombre: 'Ricardo',
        id:id
    }
    callback(usuario) //le paso el usuario como parametro al callback que espero
}

getUsuarioporID(1,(usuario)=>
{
    console.log('El usuario de la base de datos que buscas es:',usuario, 'porque tu lo tienes en la funcion de arribota')
});

//creo que el timeout no se tiene que llamar porque se llama sola
 
/*
La funcion de arriba recibe dos parametros:
un id que me dice que va a ser igual al que le pase arriba
y una funcion que va a manipular lo que tengo en la funcion con lo que yo le diga que haga 
*/

let getUsuarioporIDchido = (id,callback)=>
{
    let usuario = {
        nombre:'panchito',
        id:id
    }
    if(id>5)
    {
        callback(`El usuario con el id ${id} no existe porque es mayor a 5`)
    }
    else
    {
        //si sí existe, entonces al callback le voy a pasar los parametros null (porque espera un error y tambien el usuario)
        callback(null,usuario)
    }
}
//acuerdate que => sustituye a function() 
getUsuarioporIDchido(1,(err,usuario)=>
{
    if (err)
    {
        return console.log(err);
    }
    console.log('El usuario de base de datos que está es',usuario);
})
/*
El callback entonces recibe el argumento que se le manda al poner la instruccion:
callback(null, argumento)
donde el null es cuando trabajas con errores
 */