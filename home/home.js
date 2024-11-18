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

let searchIcon = document.querySelector(".search-icon")
let searchInput = document.querySelector(".search input")
let searchbut = document.querySelector(".search-but")
searchInput.addEventListener("mouseover",()=>{
    searchIcon.style.borderTop = "2.4px solid #88C273"
    searchbut.style.borderTop = "2.4px solid #88C273"
    searchInput.style.borderTop = "2.4px solid #88C273"
    searchIcon.style.borderLeft = "2.4px solid #88C273"
    searchbut.style.borderRight = "2.4px solid #88C273"
    searchIcon.style.borderBottom = "2.4px solid #88C273"
    searchbut.style.borderBottom = "2.4px solid #88C273"
    searchInput.style.borderBottom = "2.4px solid #88C273"
})
searchInput.addEventListener("mouseout",()=>{
    searchIcon.style.border = "none"
    searchInput.style.border = "none"
    searchbut.style.border = "none"
})
