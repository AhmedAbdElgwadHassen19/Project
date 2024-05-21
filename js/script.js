let meunIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navber")
let section = document.querySelectorAll("section")
let navLink = document.querySelectorAll("header nav a")


window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLink.forEach(links=> {
                links.classList.remove("active")
                document.querySelector("header nav a [href*=" + id + ']').classList.add('active')
            })
        }
    })
}

meunIcon.onclick =()=>{
    meunIcon.classList.toggle('fa-solid')
    navbar.classList.toggle('active')
}