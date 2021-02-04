
var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665", '\u2660', '&#x2663', '&#x2666'];
nuevonum = [];
nuevosim = [];

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
        nuevonum[i] = numeros;
        //console.log(nuevonum[i]);
        var simbolos = Math.floor(Math.random() * (4));
         nuevosim[i] = simbolos;
         //console.log(nuevosim);
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

        //console.log(nuevonum[i]);

}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////ordenamiento burbuja 
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', bubble_Sort);

    function bubble_Sort() {
        var swapp;
        var n = nuevonum.length - 1;
        var x = nuevonum;
       // console.log(nuevonum);
        do {
            swapp = false;
            for (var j = 0; j < n; j++) {
                if (x[j] > x[j + 1]) {
                    var temp = x[j];
                    x[j] = x[j + 1];
                    x[j + 1] = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp);

        let lista = document.querySelector('#lista-numeros');
        for (let k = 0; k < nuevonum.length; k++) {
            let item = document.createElement('li');
            let item2=document.createElement('li');
            //item.innerHTML = nuevonum[k];
      
            item.innerHTML = Arraynumeros[nuevonum[k]];
            
           console.log(nuevonum[k]);
           // console.log(nuevosim[k]);
            nuevosim[k]=nuevosim[nuevonum];
            //console.log(nuevosim);
            item2.innerHTML = nuevosim[nuevonum[k]];
            
            lista.appendChild(item);
            //lista.appendChild(item2);
      

              //  console.log(nuevonum[k]);
                
       

    }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////termina burbuja

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////selector sort
    const selectSort = () => {
        let min = 0;
        while (min < nuevonum.length - 1) {
            for (let m = min + 1; m < nuevonum.length; m++) {
                if (nuevonum[min] > nuevonum[m]) {
                    let aux = nuevonum[min];
                    nuevonum[min] = nuevonum[m];
                    nuevonum[m] = aux;
                }
            }
            min++;
        }
        let lista2 = document.querySelector('#lista-numeros2');
        for (let l = 0; l < nuevonum.length; l++) {
            let item = document.createElement('li');
            //item.innerHTML = nuevonum[l];
            item.innerHTML = Arraynumeros[nuevonum[l]];
            lista2.appendChild(item);

        }
    };


    let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', selectSort);

    /////////////termina ordenar select
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});

