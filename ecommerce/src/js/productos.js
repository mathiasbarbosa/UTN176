const Inputsearch = document.querySelector('#Inputsearch') 


function htmlInterfaz(array){

    containerProducts.innerHTML = ''

    array.forEach(function(elemento) {
        
        containerProducts.innerHTML += `
        
                                    <div class="producto">
                                        <img src=.${elemento.imagen} alt="producto">
                                        <h3>${elemento.nombre.toUpperCase() }</h3>
                                        <p>${elemento.descripcion}</p>
                                        <p>${elemento.precio}</p>
                                        <a href="#">Ver más</a>
                                        <button class="btn" id='${elemento.id}'>Añadir al carrito</button>
                                    </div>
        
        `
    
    });


}

function agregarAlCarrito(){
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    botones.forEach(function(boton){
      boton.addEventListener('click', function(evento){
        // console.dir(evento)
        // console.dir(evento.target)
        // console.dir(evento.target.parentNode)
        // alert('agregado al carrito')
      let id = evento.target.id
      console.log(id);
       
      let productoFilter = productosInformaticos.find( (elemento) =>  elemento.id == id  )
        // console.log(productoFilter.nombre);
      arrayCarrito.push(productoFilter)
      console.log(arrayCarrito);
      })
    })
  }

htmlInterfaz(productosInformaticos)
agregarAlCarrito()


Inputsearch.addEventListener('input', function(evento){
    console.log(evento.target.value);
    let inputValue = evento.target.value
    inputValue = inputValue.toLowerCase()
    let busqueda = productosInformaticos.filter((elemento) => elemento.nombre.includes(inputValue))
    console.log(busqueda);
    htmlInterfaz(busqueda)
    agregarAlCarrito()
})