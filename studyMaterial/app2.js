let navNonChosen = document.querySelectorAll(".nav-nonchosen")
let navChosen = document.querySelector(".nav-chosen")
navNonChosen.forEach(element => {
    element.addEventListener("mouseover",()=>{
        navChosen.style.scale="1"
        navChosen.style.opacity ="1"
    })
    element.addEventListener("mouseout",()=>{
        navChosen.style.scale="1.1"
        navChosen.style.opacity ="0.5"
    })
});



let button_2 = document.querySelectorAll(".button-2")
button_2.forEach(val=>{
    val.addEventListener("click",()=>{
        location.href ="index-3.html"
    })
})