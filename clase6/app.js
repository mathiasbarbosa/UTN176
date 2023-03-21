let botones = document.querySelectorAll('.btnAgregar')
let carrito = []
botones.forEach( function(boton){
    boton.addEventListener('click', function(evento){
        console.log(evento);
        let id = evento.target.id
        let elemento = evento.target.parentNode.children

        let card = evento.target.parentNode
        console.log(card.style);
        console.log(card.classList);


        let producto = {
            nombre: elemento[0],
            img: elemento[1],
            desc: elemento[2],
            precio: elemento[3]
        }

        carrito.push(producto)
        console.log(carrito);
        console.dir(elemento);
        alert(`producto agregado al carrito  ${id} `)
    })
})

// console.log(carrito);