const form = document.querySelector('#formLogin')

const usersArray = JSON.parse(localStorage.getItem('usersArray'))

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData(form)
    let email = formData.get('email')
    let password = formData.get('password')

    let user = usersArray.find( (el) => el.email == email && el.password == password)
    console.log(user);

    if (user == undefined) {
        // alert('no tenes permitido el ingreso')
        Swal.fire({
            title: 'no tenes permitido el ingreso!',
            icon: 'question',
            confirmButtonText: 'No tengo cuenta? Registrate',
            cancelButtonText: 'cancelar',
            showCancelButton: true,
            showCloseButton: true
          }).then( (result) => {
            if (result.isConfirmed) {
                window.location = '../pages/registerForm.html'
            }
          })
         
    }else{
        window.location = '../index.html'
    }

})