// const productosInformaticos = [
//     {
//       id: 1,
//       nombre: "laptop hp",
//       descripcion: "Laptop HP de alta calidad con procesador Intel Core i7, 16GB de RAM y 512GB de almacenamiento",
//       precio: 1200,
//       imagen: "./multimedia/products/laptophp.png",
//       categoria: 'computadora',
//       destacado: true
//     },
//     {
//       id: 2,
//       nombre: "laptop dell",
//       descripcion: "Laptop Dell de alta calidad con procesador Intel Core i5, 8GB de RAM y 512GB de almacenamiento",
//       precio: 800,
//       imagen: "./multimedia/products/laptopdell.jpg",
//       categoria: 'computadora',
//       destacado: false
//     },
//     {
//       id: 3,
//       nombre: "laptop lenovo",
//       descripcion: "Laptop Lenovo Intel Core i7 8th, 16GB de RAM y 250GB de almacenamiento",
//       precio: 1000,
//       imagen: "./multimedia/products/laptoplenovo.webp",
//       categoria: 'computadora',
//       destacado: true
//     },
//     {
//       id: 4,
//       nombre: "monitor lg",
//       descripcion: "Monitor LG de 24 pulgadas con resolución Full HD y tecnología IPS",
//       precio: 250,
//       imagen: "./multimedia/products/monitorlg.avif",
//       categoria: 'monitor',
//       destacado: true
//     },
//     {
//       id: 5,
//       nombre: "monitor samsung",
//       descripcion: "Monitor Samsung de 32 pulgadas con resolución Full HD",
//       precio: 500,
//       imagen: "./multimedia/products/monitorsamsung.jpg",
//       categoria: 'monitor',
//       destacado: false
//     },
//     {
//       id: 6,
//       nombre: "Teclado mecánico redragon",
//       descripcion: "Teclado mecánico con retroiluminación LED y teclas programables",
//       precio: 80,
//       imagen: "./multimedia/products/tecladoredragon.jpg",
//       categoria: 'teclado',
//       destacado: false
//     },
//     {
//       id: 7,
//       nombre: "Teclado mecánico logitech",
//       descripcion: "Teclado mecánico con retroiluminación LED y teclas programables",
//       precio: 80,
//       imagen: "./multimedia/products/tecladologitech.webp",
//       categoria: 'teclado',
//       destacado: false
//     },
//     {
//       id: 8,
//       nombre: "Mouse inalámbrico redragon",
//       descripcion: "Mouse inalámbrico de alta precisión con botones programables y batería de larga duración",
//       precio: 50,
//       imagen: "./multimedia/products/mouseredragon.jpg",
//       destacado: false
//     },
//     {
//       id: 9,
//       nombre: "Mouse inalámbrico t-dagger",
//       descripcion: "Mouse inalámbrico de alta precisión con botones programables y batería de larga duración",
//       precio: 50,
//       imagen: "./multimedia/products/mousetdagger.webp",
//       destacado: false
//     },
//     {
//       id: 10,
//       nombre: "Disco duro externo",
//       descripcion: "Disco duro externo de 2TB con conexión USB 3.0 para una transferencia rápida de datos",
//       precio: 100,
//       imagen: "./multimedia/products/discoduro.jpg",
//       destacado: false
//     }
//   ];

// const arrayCarrito = []

const containerProducts = document.querySelector('#containerProducts')


  // for(let i = 0; i < productosInformaticos.length; i++) {
  //   console.log(productosInformaticos[i].nombre);
  //   containerProducts.innerHTML += `
    
  //                                  <div class="producto">
  //                                   <img src=${productosInformaticos[i].imagen} alt="producto">
  //                                   <h3>${productosInformaticos[i].nombre}</h3>
  //                                   <p>${productosInformaticos[i].descripcion}/p>
  //                                   <a href="#">Ver más</a>
  //                                   <button class="btn">Añadir al carrito</button>
  //                                </div>`
  // }




function htmlInterfaz(array){



 
    containerProducts.innerHTML += `
    
                                  <div class="producto">
                                    <img src=${array.imagen} alt="producto">
                                    <h3>${array.nombre}</h3>
                                    <p>${array.descripcion}</p>
                                    <p>${array.precio}</p>
                                    <a href="#">Ver más</a>
                                    <button class="btn" id='${array.id}'>Añadir al carrito</button>
                                  </div>
    
    `
 


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



for (let i = 0; i < productosInformaticos.length; i++) {

  if (productosInformaticos[i].destacado === true) {
    console.log(productosInformaticos[i]);
    htmlInterfaz(productosInformaticos[i])
    
  }else{
    continue
  }
  
}


agregarAlCarrito() 
