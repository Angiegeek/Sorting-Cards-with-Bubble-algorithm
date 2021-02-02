

var cantidadcartas = document.getElementById("texto");

var mostrar = document.getElementById("btn3");

mostrar.addEventListener("click", ()=>{


 /////////////////cantidadcartas va ser la cantidad que escribe el usuario

    cantidadcartas=cantidadcartas.value;
//alert(cantidadcartas);
for (let i=0;i<cantidadcartas;i++){

console.log(i);

var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665", '\u2660', '&#x2663', '&#x2666'];

var numeros = Math.floor(Math.random() * (12));
var simbolos = Math.floor(Math.random() * (4));

//console.log(Arraynumeros= [numeros]);

//let sign = window.prompt("cuadro");
//falta poner colores 

if (Arraysimbolos[simbolos] == Arraysimbolos[0] || Arraysimbolos[simbolos] == Arraysimbolos[3]) {
    let div1 = document.querySelector('div1');
    let div3 = document.querySelector('div3');
    div1.style.color = 'red';
    div3.style.color = 'red';
}

document.querySelector("div1").innerHTML = Arraysimbolos[simbolos]
document.querySelector("div2").innerHTML = Arraynumeros[numeros]
document.querySelector("div3").innerHTML = Arraysimbolos[simbolos]
    
}


})

///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// prueba for


///////termina el for

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////termina prueba 


/////////////////////////////////////////////////
///empieza despliegue de cartas

var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665", '\u2660', '&#x2663', '&#x2666'];

var numeros = Math.floor(Math.random() * (12));
var simbolos = Math.floor(Math.random() * (4));

//console.log(Arraynumeros= [numeros]);

//let sign = window.prompt("cuadro");
//falta poner colores 

if (Arraysimbolos[simbolos] == Arraysimbolos[0] || Arraysimbolos[simbolos] == Arraysimbolos[3]) {
    let div1 = document.querySelector('div1');
    let div3 = document.querySelector('div3');
    div1.style.color = 'red';
    div3.style.color = 'red';
}

document.querySelector("div1").innerHTML = Arraysimbolos[simbolos]
document.querySelector("div2").innerHTML = Arraynumeros[numeros]
document.querySelector("div3").innerHTML = Arraysimbolos[simbolos]
////termina el for


/////////////////////////////pruebas

var Arraynumeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

nuevo = [];

for (contador = 0; contador < 13; contador++) {

    var numeros = Math.floor(Math.random() * (12));

    var desplegar = Arraynumeros[numeros];

    nuevo[contador] = Arraynumeros[numeros];
}

//document.write("    ");
//document.write(nuevo);

//document.write(nuevo[0]);

//for(j=0;j<13;j++){
//  document.write(nuevo[j]);
//}


///ordenamiento burbuja 

/*function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 

}
//console.log(bubble_Sort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));
document.write(bubble_Sort(nuevo));
document.write("    ");
 */
/////////////////////////////////////////////////////////////////////////
//////////////////sort selection


///////////funcion que recibe un numero del usuario 
function recibir() {
    //valor es el numero escrito por el usuario
    var valor = document.getElementById("texto").value;


    //document.getElementById("txt").innerHTML=valor;        

}


/////////ordenamiento burbuja 
let btn = document.querySelector('#btn');
btn.addEventListener('click', bubble_Sort);

function bubble_Sort() {
    var swapp;
    var n = nuevo.length - 1;
    var x = nuevo;
    console.log(nuevo);
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
    for (let i = 0; i < nuevo.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = nuevo[i];
        lista.appendChild(item);
    }

   


    //console.log(bubble_Sort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));
    console.log(nuevo);


}


const selectSort = () => {
    let min = 0;
    while (min < nuevo.length-1){
        for(let i = min+1; i < nuevo.length-1; i++) {
          if (nuevo[min] > nuevo[i]) {
            let aux = nuevo[min];
            nuevo[min] = nuevo[i];
            nuevo[i] = aux;
          }
        }
        min++;
    }
	 let lista2 = document.querySelector('#lista-numeros2');
    for (let i = 0; i < nuevo.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = nuevo[i];
        lista2.appendChild(item);
    }
};


let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',selectSort );

