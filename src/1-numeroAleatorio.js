/* Crear un programa que reciba dos argumentos y genere el numero aleatorio entre esos dos numeros, en caso que no me pasen esos 
dos argumentos. Por defecto usaré el valor de 1 al 100 */

// el "promp" (del BOM - objeto Windows) de frontEnd es reemplazado por "process"

const argumentos = process.argv;



/* Me devuelve por consola
[
  'C:\\Program Files\\nodejs\\node.exe',            // donde se ejecuta en mi pc
  'C:\\Users\\angel\\Desktop\\Rolling Code\\Clases\\ModuloTres\\conceptosNodejs\\src\\1-numeroAleatorio'    //ubicacion del archivo
]
*/

/* 
si le paso node src/1-ejercicio aleatorio 30 50  => me devuelve 

[
  'C:\\Program Files\\nodejs\\node.exe',            
  'C:\\Users\\angel\\Desktop\\Rolling Code\\Clases\\ModuloTres\\conceptosNodejs\\src\\1-numeroAleatorio',
  '30',
  '50'    
  
  ]

*/

/* Utilizo metodo de array para limpiar lo que no necesito */

const args = argumentos.slice(2)   //me devuelve solo lo últimas dos posiciones que le pase por node src....

//console.log(argumentos);
console.log(args);

let min = 1;
let max = 100;

if(args.length === 2){
    // pasar los argumentos a tipo de dato number y que sean enteros
    const minParse = parseInt(args[0])   //que pase a number el primer valor del array
    const maxParse = parseInt(args[1])

    //Validaciones : validar que no sea tipo de dato string
    if(!isNaN(minParse) && !isNaN(maxParse) && minParse < maxParse){

        //guardamos las validaciones que hicimos dentro de las variables que ya declaramos

        min = minParse;
        max = maxParse

    } else {
        console.log("Rango invalido. Usaremos los valores por defecto min = 1 ; max = 100 .");
        
    }

}

const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`El número aleatorio entre ${min} y ${max} es: ${aleatorio}.`);
