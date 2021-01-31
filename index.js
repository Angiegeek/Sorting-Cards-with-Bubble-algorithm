
/////////////////////////////////////////////////
///empieza deslñiegue de cartas

var Arraynumeros = ['A',2,3,4,5,6,7,8,9,10,"J",'Q','K'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665",'\u2660','&#x2663','&#x2666'];

var numeros = Math.floor(Math.random()*(12));
var simbolos = Math.floor(Math.random()*(4));

//console.log(Arraynumeros= [numeros]);

//let sign = window.prompt("cuadro");
  //falta poner colores 
  
if(Arraysimbolos[simbolos]==Arraysimbolos[0] || Arraysimbolos[simbolos]==Arraysimbolos[3]){
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

var Arraynumeros = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

nuevo = [];

for( contador=0; contador < 13; contador++ ) {
   
       var numeros = Math.floor(Math.random()*(12));

       var desplegar = Arraynumeros[numeros];
       
       nuevo[contador]=Arraynumeros[numeros];
       
       document.write(desplegar);
       //document.write(nuevo);
     }

document.write("    ");
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
    function recibir()
    {
            //valor es el numero escrito por el usuario
        var valor = document.getElementById("texto").value;
        
        
        //document.getElementById("txt").innerHTML=valor;        
        
    }   


/////////ordenamiento burbuja 

function bubble_Sort(a)
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


//console.log(bubble_Sort([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));
document.write(bubble_Sort(nuevo));
document.write("    ");
        //document.getElementById("txt").innerHTML=valor;        
alert("Activaste la funcion miFuncion()");
          
  }


  
const selection = arr => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

  arr.forEach((item, i) => {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    };
    swap(arr, i, min);
  });

  return arr;


//console.log(selection([12,345,4,546,122,84,98,64,9,1,3223,455,23,234,213]));

document.write("    ");
document.write(selection(nuevo));

}
