import { getAll, htmlInterfaz, agregarAlCarrito, detailProduct } from "./js/functions.js";

let containerAllProducts = document.querySelector('#containerAllProducts')
let Inputsearch = document.querySelector('#Inputsearch')



document.addEventListener('DOMContentLoaded', async () => {
    let products = await getAll()
    htmlInterfaz(products, containerAllProducts)
    agregarAlCarrito(products)
    detailProduct()

    Inputsearch.addEventListener('input', function(evento){
        console.log(evento.target.value);
        let inputValue = evento.target.value
        inputValue = inputValue.toLowerCase()
        let busqueda = products.filter((elemento) => elemento.nombre.includes(inputValue))
        console.log(busqueda);
        htmlInterfaz(busqueda, containerAllProducts)
        agregarAlCarrito(products)
    })
})