
//Amb identificador (identificador= button1):
/*document.getElementById('button1').addEventListener('click', 
onClickButton1);

/*document.getElementById('button1').addEventListener('mouseenter', 
function() {
    alert('Mouse enter!');
});
document.getElementById('button1').addEventListener('mouseout', 
function() {
    alert('Mouse out!');
});*/

//Sense identificador, AMB CLASSE.(Quan només en tenim un d'una classe) Bona pràctica.
document.querySelector('.button1').addEventListener('click', 
function() {
    alert('Button clicked!');
});

//Quan hi ha més d'un element amb aquesta classe utilitzem querySelectorAll. Ens retornarà una llista
const listOfButtons2 = document.querySelectorAll('.button2');
//Això ens retorarà una llista
console.log(listOfButtons2);

function onClickButton1 (){
    alert('Watch out!')
}
