// la declaramos
var unaVariable;
// asignamos valor
unaVariable = "Hola mundo" // string 

let otraVariable;
otraVariable = "Es una variable con let" // string
 
 const  Pi = 3.14 // number

// no se puede re-declarar  Pi = 'a otra cosa'

// let vs var
// var unNumero = 5;
// var otroNumero = 10;
// if (unNumero  === 5) {
//   let unNumero  = 4; // El alcance es dentro del bloque if
//   var otroNumero  = 1; // El alcance es global
//   console.log(unNumero );  // 4
//   console.log(otroNumero );  // 1
// }
// console.log(unNumero ); // 5
// console.log(otroNumero ); // 1

let variable = "una cadena de texto"
console.log(variable.toUpperCase())
let otraVariable2 = variable.toUpperCase()
variable = variable.toUpperCase()
console.log(variable);

variable = 10;
console.log( typeof variable); // Number
variable = true;
variable = undefined
variable = null ;
variable = NaN
variable = [] // array;
variable = {} // objeto


//Estructura simple


// let mayorDeEdad = 18

// if (condicion){
//     si es true 
//     las intrucciones para ejecutar
// }

// if( 15 > mayorDeEdad ) {
//     alert("Podes entrar tranquilamente")
// }

// if( 19 > mayorDeEdad ) {
//     alert("Podes entrar tranquilamente")
// }

// console.log("continua el programa");

// esturctura doble

// let mayorDeEdad = 18

// let edadUsuario = prompt('ingrese su edad');

// console.log(edadUsuario);
// console.log(typeof edadUsuario);

// // el operador AND && Se tienen que cumplir todos los operandos
// // el operador OR || con que uno se cumpla sea true va a aentrar al cuerpo del if
// edadUsuario = Number(edadUsuario)
// console.log(typeof edadUsuario);

// if(edadUsuario > mayorDeEdad && typeof edadUsuario == 'number'){
//     alert('tenes permitido el ingreso')
// } else{
//     alert('volve cuando seas mayor')
// }

//


// let mayorDeEdad = 18

// let edadUsuario = prompt('ingrese su edad');

// edadUsuario = Number(edadUsuario)

// if (edadUsuario > mayorDeEdad && edadUsuario <= 40) {
//     alert('podes ingresar')
// }else if (edadUsuario >= 40) {
//     alert('podes ingresar tambien pero teniamos ganas de hacer otro else if')
// }else if ( edadUsuario < mayorDeEdad){
//     alert('No podes ingresar')
// }else{
//     alert('el valor no es valido')
// }


// let color = prompt('color')

// switch (color) {
//     case 'rojo':
//         alert('el color es ' + color)
//         break;

//     case 'azul':
//         alert('el color es ' + color)
//         break;

//     case 'rojo':
//         alert('el color es ' + color)
//         break;    
//     default:
//         alert('no es admitido el valor ' + valor)
//         break;
// }

// CICLOS

// let numero = 1

// console.log( 'el numero es: ' + 1);
// console.log( 'el numero es: ' + 1 + 1);
// console.log( 'el numero es: ' + 1 + 1 + 1);

// while(numero <= 5){
//     console.log('el numero es: ' + numero);
//     numero = numero + 1
// }

// let edad = prompt("edad")
// edad = Number(edad)

// while (edad < 18) {
//     alert('no podes ingresar')
//     edad = prompt('edad')
// }
// let edad;
// do {
//     edad = prompt('edad')
//     edad = Number(edad)
// } while (edad < 18);

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// for(let i = 0; i <= 5; i){
//     console.log('el valor de i es: ' + i);
// }

// declarando
// function sumar(num1, num2) {
//     let resultado = num1 + num2 ;
//     console.log(resultado);
// }



// sumar(Number(prompt('numero 1')),Number( prompt('numero 2')))

// let numero1 = Number(prompt('numero 1'))
// let numero2 = Number(prompt('numero 2'))
// sumar(numero1, numero2)
// // console.log('resultado por fuera de lafuncion ' + resultado);

// function resta(num1, num2){
//     let resultado = num1 - num2
//     console.log(resultado);
// }

// resta(10, 8)

// Escribe un programa que solicite al usuario un número y muestre en pantalla la tabla de multiplicar correspondiente utilizando un bucle "for”

function tablaDeMultiplicar(factor){
    for(let i = 0; i <= 10; i++ ){
        let multi = i * factor
        console.log(`el resultado es:  \n${multi} ` );

    }
}

tablaDeMultiplicar(5)
// tablaDeMultiplicar(100)
// tablaDeMultiplicar(345345)

function suma(num1, num2){
    let resultado = num1 + num2
    return resultado
}

suma(5, 10)

let sumaNumeros = suma(10, 30)
console.log(sumaNumeros);

function tipoDedato(parametro){
    console.log(typeof parametro);
}

tipoDedato('hola que tal')
tipoDedato(5)