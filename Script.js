
window.onload = function (){
    let excuse = document.querySelector('#excuse');
    console.log(excuse.innerHTML)
    var x = Math.floor((Math.random() * 10));
    if(x<5){
excuse.innerHTML = mitexto(x);}
else {excuse.innerHTML = mitexto(1)}}


let who = ['Mi perro','Mi abuela','Mi Tortuga','Mi Pajarillo','Mi hermano'];
let what = ['se lo comió','lo chocó','lo embarró','lo quebró','lo regaló'];
let when = ['justo antes de clases','en el minuto de la entrega','cuando lo estaba terminando','mientras almorzaba'];

function mitexto(indice){
        var texto = '';
    texto += who[indice];
    texto += ' ';
    texto += what[indice]; 
    texto += ' ';   
    texto += when[indice];
return texto; 
}
console.log(other)