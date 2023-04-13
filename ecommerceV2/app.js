import { htmlInterfaz, agregarAlCarrito, getAll } from "./js/functions.js"

let arrayCarrito = []
let containerProducts = document.querySelector('#containerProducts')


document.addEventListener('DOMContentLoaded', async () => {
   let products =  await getAll()
   let productsDest =  products.filter( item => item.destacado == true)
   console.log(productsDest);
   htmlInterfaz(productsDest, containerProducts)
   console.log(arrayCarrito);
   agregarAlCarrito(productsDest) 
})