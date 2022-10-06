

const bar = document.querySelector(".burger")
const nav = document.querySelector(".links")

console.log(bar);

bar.addEventListener('click', ()=>{
    nav.classList.toggle("nav-active")
})