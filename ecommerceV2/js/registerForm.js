import { User } from "../models/user.class.js"

const form = document.querySelector('#formRegister')

let usersArray = JSON.parse( localStorage.getItem('usersArray') ) || []
console.log(usersArray);



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(form)
    let username = formData.get('username')
    let email = formData.get('email')
    let password = formData.get('password')

    if ((username !== '') && (email !== '') && (password !== '' && password.length > 5)) {
        let user = new User(username, email, password)
        usersArray.push(user)
        console.log(usersArray);
        localStorage.setItem('usersArray', JSON.stringify(usersArray))
        window.location = '../pages/loginForm.html'
     
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'Los datos no son corrrectos',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }

})
