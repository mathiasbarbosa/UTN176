const containerTable = document.querySelector('#containerTable')

containerTable.addEventListener( 'mouseup', () => {
    // containerTable.style.backgroundColor = 'red'
    containerTable.classList.add('fondoTabla')
})

const box = document.querySelector('#box1')

// box.addEventListener('mouseover', () => {
//     box.classList.add('boxContainer')
//     box.classList.remove('boxContainer2')
// } )

// box.addEventListener('mouseout', () => {
//     box.classList.remove('boxContainer')
//     box.classList.add('boxContainer2')
// } )


box.onclick = function(){
    alert('click')
}
