
var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];
//                    corazon   espada     trebol   diamante
//var Arraysimbolos = [1, 2, 3, 4];
var Arraysimbolos = ["&#x2665", "\u2660", '&#x2663', '&#x2666'];
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
ArrayTotal=[];
ArrayTotal2=[];
    for (let i = 0; i < cantidadcartas; i++) {
         

        var numeros = Math.floor(Math.random() * (13));
           
        nuevonum[i] = numeros;
        
    
        var simbolos = Math.floor(Math.random() * (4));
        nuevosim[i] = simbolos;

 

        //console.log("numero",nuevonum[i],"simbolo",nuevosim[i]);
     




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



    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////ordenamiento burbuja 
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', bubble_Sort);

    function bubble_Sort() {
        var swapp;
        var n = nuevonum.length - 1;
        var x = nuevonum;
        var y = nuevosim;

        do {
            swapp = false;
            for (var j = 0; j < n; j++) {
                if (x[j] > x[j + 1]) {
                    
                    var temp1=y[j];
                    y[j] = y[j + 1];
                    y[j + 1] = temp1;
                    
                    
                    
                    var temp = x[j];
                    x[j] = x[j + 1];
                    x[j + 1] = temp;
                    swapp = true;

                   
               

                }
           
            }

            n--;
           // console.log(x);
        } while (swapp);
         //console.log(x);

        let lista = document.querySelector('#lista-numeros');
        for (let k = 0; k < nuevonum.length; k++) {
            let item = document.createElement('li');

            let item2 = document.createElement('li');
       


            /////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////
            /////////////////////pruebas

            let padre = document.createElement("div");
            let arriba = document.createElement("div");
            let medio = document.createElement("div");
            let abajo = document.createElement("div");



            if (nuevosim[simbolos] == Arraysimbolos[0] || Arraysimbolos[simbolos] == Arraysimbolos[3]) {
                arriba.style.color = 'red';
                abajo.style.color = 'red';
            }


            
           //console.log("nuevapos",k,"simbolob",nuevosim[[k]]);
         

           
           //arriba.innerHTML = Arraysimbolos[simbolos];
            //medio.innerHTML = Arraynumeros[nuevonum[k]];
            //abajo.innerHTML = Arraysimbolos[simbolos];



            arriba.innerHTML = Arraysimbolos[nuevosim[k]];
            medio.innerHTML = Arraynumeros[nuevonum[k]];
            abajo.innerHTML = Arraysimbolos[nuevosim[k]];


            ///llama al style creado del css
            padre.classList.add("creado");
            arriba.classList.add("div1");
            medio.classList.add("div2");
            abajo.classList.add("div3");


            padre.appendChild(arriba);
            padre.appendChild(medio);
            padre.appendChild(abajo);

            cards.appendChild(padre);



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

                    let aux2=nuevosim[min];

                    nuevonum[min] = nuevonum[m];

                    nuevosim[min]=nuevosim[m];
                   nuevosim[m]=aux2;

                    nuevonum[m] = aux;
                }

                min++;
            }

        }

        for (h = 0; h < nuevonum.length; h++) {
            let padre = document.createElement("div");
            let arriba = document.createElement("div");
            let medio = document.createElement("div");
            let abajo = document.createElement("div");



            if (nuevosim[h] == Arraysimbolos[0] || nuevosim[h] == Arraysimbolos[3]) {
                arriba.style.color = 'red';
                abajo.style.color = 'red';
            }
            arriba.innerHTML = Arraysimbolos[nuevosim[h]];
            medio.innerHTML = Arraynumeros[nuevonum[h]];
            abajo.innerHTML = Arraysimbolos[nuevosim[h]];


            ///llama al style creado del css
            padre.classList.add("creado");
            arriba.classList.add("div1");
            medio.classList.add("div2");
            abajo.classList.add("div3");


            padre.appendChild(arriba);
            padre.appendChild(medio);
            padre.appendChild(abajo);

            cards.appendChild(padre);

        }

    };


    let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', selectSort);


    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////



    /////////////termina ordenar select
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});


