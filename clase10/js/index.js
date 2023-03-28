const arrayTasks = [];
const form = document.querySelector('#formTask')
const inputTask = document.querySelector('#inputTask')
const listTasks = document.querySelector("#listTasks")


class Task{
    
    constructor(task){
        this.task = task;
        this.state = false
    }

}


function renderHTML(array) {

    // let fragmento = document.createDocumentFragment()
    listTasks.innerHTML = ''

    array.map( elemento => {

        

        let li = document.createElement('li')
        let checkbox = document.createElement('input')
        let i = document.createElement('i')
        i.classList.add( 'bi','bi-trash3')
        checkbox.type = 'checkbox'
        checkbox.checked = elemento.state
        
        checkbox.addEventListener('change', () => {
            elemento.state = checkbox.checked
            console.log(array);
            renderHTML(arrayTasks)
        })

        i.addEventListener('click', () => {
            const index = arrayTasks.indexOf(elemento)
            console.log(index);
            arrayTasks.splice(index, 1)
            console.log(array);
            renderHTML(arrayTasks)

        })


        li.innerHTML = elemento.task
        li.append(checkbox)
        li.append(i)
        listTasks.append(li)
    })
    
}

// const renderHTML = () => {

// }



form.addEventListener('submit', (evento) => {
    // instrucciones
    evento.preventDefault()
    let task =  new Task(inputTask.value)
    console.log(task);
    arrayTasks.push(task)
    console.log(arrayTasks);
    renderHTML(arrayTasks)

    form.reset()
})
