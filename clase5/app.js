// alert("Buenas tardes!")

// * Seleccionar elementos del HTML

// por etiqueta
// let h1 = document.getElementsByTagName('h1')
// let p = document.getElementsByTagName('p')

// console.log(p);
// console.log(p[0]);
// console.log(h1);

// let parrafo1 = document.getElementsByClassName('parrafo1')
// console.log(parrafo1);

// let idParrafo = document.getElementById('idParrafo')
// console.log(idParrafo);

// let a = document.getElementsByTagName('a')
// console.log(a);

// let div = document.querySelector('div')
// console.log(div);
// let divs = document.querySelectorAll('div')
// console.log(divs);

// para llamar por id usamos #
// para llamar por clase .

let elemntoHtml = '#div1'

//  let div1 = document.querySelector('#div2')
let div1 = document.querySelector(elemntoHtml)
console.log(div1);

let parrafo1 = document.querySelector('.parrafo1')
console.log(parrafo1);
let parrafos = document.querySelectorAll('.parrafo1')
console.log(parrafos);


//* Metodos
console.log( parrafo1.innerHTML );
parrafo1.innerHTML = '<em> hola cambio el valor que tenia </em>'
console.log( parrafo1.innerText); 
// parrafo1.innerText =  '<em> hola cambio el valor que tenia </em>'
console.log(parrafo1.id);
parrafo1.id = 'teCambioElId'
console.log(parrafo1.className)
console.log( parrafo1.classList); 

parrafo1.style.color = 'green'

console.log(div1.children[1])

// querySelector('#id')
div1.style.backgroundColor = 'tomato'

console.log(parrafos);

for (let index = 0; index <= 5 ; index++) {
    console.log(parrafos[index]);
    parrafos[index].style.color = 'red'
}


// * Crear elementos 
let h2 = document.createElement('h2')
let texto = document.createTextNode('esto es texto')

h2.append(texto)

document.body.append(h2)

// h2.innerText = 'algo de texto'


// * eventos 
let btn = document.querySelector('#btnClick')

function funcionClick(){
    alert('hiciste click en el boton')
}


// btn.addEventListener('click', funcionClick)


// * arrays
let personas = ['Rodrigo', 'juan', 'maria', 'Mathias']
console.log(personas);
// // let array = new Array()
// console.log(personas[0]);
// console.log(personas.length);

// for (let i = 0; i < personas.length; i++) {
//     alert('hola ' + personas[i])
    
// }

// let nombre = prompt('decime tu nombre')

// personas.push(nombre)
personas.push('Julian')

console.log(personas);

const frutas = ["banana", "manzana", "tomate", "naranja"];

frutas.forEach(function(elemento,index){
    console.log(elemento);
    console.log(index);
})

let botones = document.querySelectorAll('button')
console.log(botones);

botones.forEach(function(el){
    console.log(el);
    el.addEventListener('click',funcionClick )
})


let persona = {
    nombre: 'Juan',
    edad: 30,
    mail: 'juancito@gmail.com',

    saludo: function() {
        alert('Hola, Soy '+ this.nombre + '. ');
      }
    
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);

persona.direccion = 'calle falsa 123'

console.log(persona);

persona.saludo()

numero.parseInt()

isNaN()