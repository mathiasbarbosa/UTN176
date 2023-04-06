
//             GET
// fetch(url, options)

// console.log( fetch('https://rickandmortyapi.com/api/character'));

// fetch('https://rickandmortyapi.com/api/character')
//     .then( (response) => {
//         console.log(response);
//         return response.text()
//     })
//     .then( (data) => {
//         console.log(data);
//     })


const searchcharacter = document.querySelector('#searchcharacter')
const input = document.querySelector('#inputSearch')
// console.log(searchcharacter);


let characters = []
const htmlNames = (array) => {
    for (const elemento of array) {
        document.body.innerHTML += ` <h2> ${elemento.name} </h2>
                                    <img src=${elemento.image}> 
        `
    }
}


// fetch('https://rickandmortyapi.com/api/character') // Promesa
//     .then( (response) => { // Procesar la response
//         console.log(response);
//         if (response.status !== 200) {
//             throw new Error('error en la solicitud')
//         }
//         return response.json()
//     })
//     .then( (data) => {  // aca nos llega la data
//         console.log(data.results);
//         characters  = data.results  
//         htmlNames(characters)
//     })
//     .catch((err) => alert(err))



// fetch('https://rickandmortyapi.com/api/character/?name=rick') // Promesa
//     .then( (response) => { // Procesar la response
//         console.log(response);
//         return response.json()
//     })
//     .then( (data) => {  // aca nos llega la data
//         console.log(data.results);
//         // document.body.innerHTML += ` <h2> ${elemento.name} </h2>
//         //                             <img src=${elemento.image}> 
//         // `
//     })



// console.log(searchcharacter);

// searchcharacter.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let id = input.value
//     let container = document.querySelector('#container')
//     console.log(id);

//      fetch(`https://rickandmortyapi.com/api/character/${id}`) // Promesa
//         .then( (response) => { // Procesar la response
//             console.log(response);
//             return response.json()
//         })
//         .then( (data) => {  // aca nos llega la data
            
//             console.log(data);
//             container.innerHTML += ` <h2> ${data.name} </h2>
//                                         <img src=${data.image}> 
//             `
//         })



// })


// const registerUser = document.querySelector('#registerUser')

registerUser.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(registerUser)

    let newUser = {
        name:formData.get('name'),
        email:formData.get('email'),
        password: formData.get('password')
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-type': 'application/json; charset=UTF-8',}
    })
    .then( (response) => response.json())
    .then( (data) => {
        console.log(data);
        alert(`Usuario  ${data.name} registrado`)
    })
})


// fetch('https://rickandmortyapi.com/api/character') // Promesa
//     .then( (response) => { // Procesar la response
//         console.log(response);
//         if (response.status !== 200) {
//             throw new Error('error en la solicitud')
//         }
//         return response.json()
//     })
//     .then( (data) => {  // aca nos llega la data
//         console.log(data.results);
//         characters  = data.results  
//         htmlNames(characters)
//     })
//     .catch((err) => alert(err))


const getAll = async () => {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/characte')
        console.log(response);
        if (!response.ok) {
            throw new Error('Error en la solicitud')
        }
        let data = await response.json()
        console.log(data.results);
        htmlNames(data.results)
    } catch (error) {
        alert(error)
    }
}

getAll()