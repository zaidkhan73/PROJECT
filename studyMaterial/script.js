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

let buttons = document.querySelectorAll(".button-1")
buttons[0].addEventListener("click",()=>{
  console.log("l")
  location.href = "index-2_1.html"
})
buttons[1].addEventListener("click",()=>{
  console.log("l")
  location.href = "index-2_2.html"
})



