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


document.querySelectorAll(".button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const dropdown = document.getElementById(`dropdown${index + 1}`);
        const isVisible = dropdown.style.display === "flex";
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none"); // Close other dropdowns
        dropdown.style.display = isVisible ? "none" : "flex";
    });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".button-wrapper")) {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
});