
var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665", '\u2660', '&#x2663', '&#x2666'];
nuevonum = [];
nuevosim=[];

var cantidadcartas = document.getElementById("texto");
var mostrar = document.getElementById("btn3");
var cards = document.getElementById("cards");

//asignacion de funciones
mostrar.addEventListener("click", () => {

    /////////////////cantidadcartas va ser la cantidad que escribe el usuario
    cantidadcartas = cantidadcartas.value;
    //alert(cantidadcartas);

    for (let i = 0; i < cantidadcartas; i++) {

        var numeros = Math.floor(Math.random() * (13));
         nuevonum[i]=numeros;
         console.log( nuevonum[i]);         
        var simbolos = Math.floor(Math.random() * (4));
          

        //let sign = window.prompt("cuadro");
        //falta poner colores 
      
        let padre = document.createElement("div");
        let arriba = document.createElement("div");
        let medio = document.createElement("div");
        let abajo = document.createElement("div");

        

        if (Arraysimbolos[simbolos] == Arraysimbolos[0] || Arraysimbolos[simbolos] == Arraysimbolos[3]) {
            arriba.style.color = 'red';
            abajo.style.color = 'red';
        }



        arriba.innerHTML = Arraysimbolos[simbolos];
        medio.innerHTML = Arraynumeros[numeros];
        abajo.innerHTML = Arraysimbolos[simbolos];
        
        ///llama al style creado del css
        padre.classList.add("creado");
        arriba.classList.add("div1");
        medio.classList.add("div2");
        abajo.classList.add("div3");


        padre.appendChild(arriba);
        padre.appendChild(medio);
        padre.appendChild(abajo);

        cards.appendChild(padre);



        ////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////pruebas
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////ordenamiento burbuja 
let btn = document.querySelector('#btn');
btn.addEventListener('click', bubble_Sort);

function bubble_Sort() {
    var swapp;
    var n = nuevonum.length - 1;
    var x = nuevonum;
    console.log(nuevonum);
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);

    let lista = document.querySelector('#lista-numeros');
    for (let k = 0; k < nuevonum.length; k++) {
        let item = document.createElement('li');
        item.innerHTML = nuevonum[k];
        lista.appendChild(item);
    }


    //  console.log(nuevo);


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////selector sort
const selectSort = () => {
    let min = 0;
    while (min < nuevonum.length - 1) {
        for (let i = min + 1; i < nuevonum.length - 1; i++) {
            if (nuevonum[min] > nuevonum[i]) {
                let aux = nuevonum[min];
                nuevonum[min] = nuevonum[i];
                nuevonum[i] = aux;
            }
        }
        min++;
    }
    let lista2 = document.querySelector('#lista-numeros2');
    for (let i = 0; i < nuevonum.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = nuevonum[i];
        lista2.appendChild(item);
    }
};


let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', selectSort);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }


 ///////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////pruebas
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////ordenamiento burbuja 
let btn = document.querySelector('#btn');
btn.addEventListener('click', bubble_Sort);

function bubble_Sort() {
    var swapp;
    var n = nuevonum.length - 1;
    var x = nuevonum;
    console.log(nuevonum);
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);

    let lista = document.querySelector('#lista-numeros');
    for (let k = 0; k < nuevonum.length; k++) {
        let item = document.createElement('li');
        item.innerHTML = nuevonum[k];
        lista.appendChild(item);
    }


    //  console.log(nuevo);


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


});


for (contador = 0; contador < cantidadcartas; contador++) {

    //var numeros = Math.floor(Math.random() * (12));

    var desplegar = nuevo[contador];
    console.log(desplegar);
    //nuevo[contador] = Arraynumeros[numeros];
}




///////////funcion que recibe un numero del usuario 
function recibir() {
    //valor es el numero escrito por el usuario
    var valor = document.getElementById("texto").value;


    //document.getElementById("txt").innerHTML=valor;        

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////ordenamiento burbuja 
let btn = document.querySelector('#btn');
btn.addEventListener('click', bubble_Sort);

function bubble_Sort() {
    var swapp;
    var n = nuevonum.length - 1;
    var x = nuevonum;
    console.log(nuevonum);
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);

    let lista = document.querySelector('#lista-numeros');
    for (let i = 0; i < nuevonum.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = nuevonum[i];
        lista.appendChild(item);
    }


    //  console.log(nuevo);


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





