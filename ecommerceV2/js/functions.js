


export const htmlInterfaz = (array, container) => {

    container.innerHTML = ''
    for (const item of array) {
    
      container.innerHTML += `
        
                                      <div class="producto">
                                        <img src=${item.imagen} alt="producto">
                                        <h3>${item.nombre}</h3>
                                        <p>${item.descripcion}</p>
                                        <p>${item.precio}</p>
                                        <button class='btn-detail'>Ver más</button>
                                        <button class="btn" id='${item.id}'>Añadir al carrito</button>
                                      </div>
        
        `
      }
}


export function agregarAlCarrito(array){
    // TODO arreglar error en el carrito
    let arrayCarrito;
    console.log(array);
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
       
      let productoFilter = array.find( (elemento) =>  elemento.id == id  )
      console.log(productoFilter);
      if (productoFilter !== undefined) {
            arrayCarrito =  JSON.parse( localStorage.getItem('carrito')) || []
            console.log(arrayCarrito);
            let index = arrayCarrito.findIndex( (el) => el.id == productoFilter.id)
            // console.log(productoFilter.id);
            // console.log(arrayCarrito[0].id);
            if (index !== -1) {
                arrayCarrito[index].cantidad += 1
                localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
            }else{
                productoFilter.cantidad = 1
                arrayCarrito.push(productoFilter)
                localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
                console.log(arrayCarrito);
            }
           
      }
        // console.log(productoFilter.nombre);
     
      })
    })
  }


export const addEventDetail = () => {
  const btnsCollection = document.querySelectorAll('.btn-detail')
  for (const btn of btnsCollection) {
      btn.addEventListener('click', (event) => {
        console.dir(event.target.parentNode.children[0].attributes[0].textContent);
        let productDetail = {
          img: event.target.parentNode.children[0].attributes[0].textContent,
          product: event.target.parentNode.children[1].innerText,
          description: event.target.parentNode.children[2].innerText,
          price: event.target.parentNode.children[3].innerText,
        }

        localStorage.setItem('productDetail', JSON.stringify(productDetail))
        window.location = './pages/detailProduct.html'
        console.log(productDetail);

      })
  }
}

export const detailProduct = () => {
  addEventDetail()
}

export const getAll = async () => {
  try {
    let response = await fetch('./products.json')
    if (response.ok !== true) {
      new Error('error en la solicitud')
    }
    let data = await response.json()
    console.log(data);
    return data
  } catch (error) {
    alert(error)
  }
    
}
