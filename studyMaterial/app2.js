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



let but = document.querySelectorAll(".button")
let drop = document.querySelectorAll(".dropdown")
let wrap = document.querySelectorAll(".button-wrapper")
let chosenBut;
but.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        chosenBut = but[index]          //button that is been click
        chosenBut.style.scale ="1.125"  //changing the css of that but
        chosenBut.style.backgroundColor = " rgba(160,214,131,0.5)"
        but.forEach((val,idx)=>{
            if(idx != (index)){
                wrap[idx].style.display = "none"
            }
        })
        let dropdown = document.querySelector(`#dropdown${index+1}`)
        dropdown.style.display = "flex"
    })
})

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".button-wrapper")) {
        chosenBut.style.scale ="1"  //undoing the css of but
        chosenBut.style.backgroundColor = " rgba(160,214,131,0.2)"
        drop.forEach(d => {          
            d.style.display = "none"
            wrap.forEach(val=>{
                val.style.display = "flex"
            })
        })
    }
});