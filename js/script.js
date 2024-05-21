let meunIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navber")

meunIcon.onclick =()=>{
    meunIcon.classList.toggle('fa-solid')
    navbar.classList.toggle('active')
}