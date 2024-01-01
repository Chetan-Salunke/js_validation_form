// console.log("hey")
const form = document.getElementById('form')
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
// console.log("hey2")

const name_error = document.getElementById('name_error')
const lastname_error = document.getElementById('lastname_error')
const phone_error = document.getElementById('phone_error')
const email_error = document.getElementById('email_error')
const password_error = document.getElementById('password_error')
const btn = document.getElementById('btn')

form.addEventListener('submit',(e)=>{

    if (name.value === '' || name.value === null){
        e.preventDefault();
        name_error.innerHTML = "First Name Required *";
        name_error.style.color = "red"
    }
     if (lastname.value === '' || lastname.value === null) {
        // e.preventDefault();
        lastname_error.innerHTML = "Last Name Required *";
        lastname_error.style.color = "red"
    }
    if (phone.value === '' || phone.value === null) {
        // e.preventDefault();
        phone_error.innerHTML = "Phone-No Required *";
        phone_error.style.color = "red"
    }
    if (email.value === '' || email.value === null) {
        // e.preventDefault();
        email_error.innerHTML = "Email Required *";
        email_error.style.color = "red"
    }  
    if (password.value === '' || password.value === null) {
        // e.preventDefault();
        password_error.innerHTML = "Password Required *";
        password_error.style.color = "red"
    } 
})




