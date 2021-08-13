//obtener objetos y hacerlos mas pequeños
//tambien de arrays

const vocales = [ 'A','E','I','O','U'];
//console.log(vocales);
const numeros = [1,2,3,4,5];
//console.log(numeros);
const [uno,, tres, ...resto] = vocales; //La coma doble es para saltar elementos

// console.log(vocales);
// console.log(uno);
// console.log(tres);
//después de los puntos, el último tendra el valor del array igual y va a guardar los elementos que el diga juntos
//spread operator
console.log(resto);
//No se guardan como las mismas string, sino como elementos, asií como en los parámetros
const arregloCombinado = [...vocales,...numeros];
const arregloCombinadoConcat = vocales.concat(numeros);
console.log(arregloCombinado);
console.log(arregloCombinadoConcat); //es lo mismo, pero el spread operator sirve tambien para objetos

function sumarYmultiplicar(param1,param2)
{
    return[param1+param2 , param1*param2]
}
const llamadaDefuncion = sumarYmultiplicar(1,2);
const [laSuma, laResta, otro='estoy aqui de puro pedo'] = sumarYmultiplicar(1,3);
console.log(llamadaDefuncion);
console.log(laSuma);
console.log(otro); //si a esta en el return le ponemos return param1/param2 devolvera una division aunque no se llame así
const objeto1 = {
    vehiculo : 'carro',
    llantas : 4,
    marca : 'Audi',
    conductor:
    {
        nombre: 'Micho García',
        licencia: true
    }
}