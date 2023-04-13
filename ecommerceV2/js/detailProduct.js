let product = JSON.parse( localStorage.getItem('productDetail'))
console.log(product);
let main = document.querySelector('main')
console.log(main);


const htmlDetail = (product) => {
    main.innerHTML = `
                <section class="row mt-5">
                <div class="col-md-6 col-lg-6 col-sm-12">
                <div class="row justify-content-center">
                    <img class="col-8 rounded-5" src=".${product.img}" alt="">
                </div>

                <div class="row mt-5 justify-content-center">
                    
                    <img  class="col-2 rounded-4" src=".${product.img}" alt="">
                    <img  class="col-2 rounded-4" src=".${product.img}" alt="">
                    <img class="col-2 rounded-4" src=".${product.img}" alt="">
                    <img class="col-2 rounded-4" src=".${product.img}" alt="">

                </div>
                </div>
                
                
                <div class="col-md-6 col-lg-6 col-sm-12">
                
            
                
                    <div class="divInfo">
                    <h4 >Click Tech</h4>
                    
                
                    <h2 ">${product.product}</h2>
                
                    <p >${product.description}</p>
                    </div>
                
                    <div class="row">
                    <div class="col-12 containerPrice">
                        <strong > $125.00 </strong>
                        <span class="badge "> 50%</span>
                    </div>
                    <span id="precioAnterior"> $${product.price} </span>
                    </div>
                
                    <div class="row">
                    <div class="col-4 me-4 rounded-4 containerBtn">
                        <img src="./images/icon-minus.svg"  alt="">
                        <strong> 0 </strong>
                        <img src="./images/icon-plus.svg" alt="">
                    </div>
                
                    <button class="btn col-4 addCart">Add to cart</button>
                    </div>
                
                
                </div>
            </section>
                
    
    
    
    `
}

document.addEventListener('DOMContentLoaded', () => {
    htmlDetail(product)
})

