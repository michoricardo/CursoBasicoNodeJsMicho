
const posts = [{title: 'post uno',text:'simulacion de peticion 1'},
{title:'post2',text:'simulacion de peticion 2'}]

function traerpost((postConsultaTitle,callback)=> {
    nombresin=(`el post solicitado es ${postConsultaTitle.title} y su texto es ${postConsultaTitle.text}`);
});

traerpost((1,llamadaAlCallback=()=>{
    console.log(nombresin);
}));