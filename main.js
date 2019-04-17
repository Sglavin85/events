//Mirror Mirror in the code

let getInput = document.getElementById("entry");

let leftDisplayOutput = document.getElementById("leftDisplay");

let rightDisplayOutput = document.getElementById("rightDisplay");

getInput.addEventListener("keyup", event => { 
    rightDisplayOutput.innerHTML = event.target.value
    leftDisplayOutput.innerHTML = event.target.value
});

// Scrolling and Scaling

let audrey = document.getElementById("audrey");

let scrollPort = document.querySelector("#contain");

document.addEventListener("scroll", function () {
    console.log("scrolling")
    let height = Math.round(window.scrollY) ;
    let width = Math.round(window.scrollY);
    audrey.style.width = width * .33 + "px";
    audrey.style.height = height * .25 + "px";
    audrey.style.minHeight = "100px";
    audrey.style.minWidth = "50px"
})


// Wonder Powers Activate
let flight = document.getElementById("flight");
let mindReading = document.getElementById("mindreading")
let xRay = document.getElementById("xray")
let buttons = document.querySelectorAll(".activator")
let powers = document.querySelectorAll(".power")
let activateButton = document.getElementById("activate-all")
let deactivateButton = document.getElementById("deactivate-all")

function test(divToChange){
    let div = document.getElementById(divToChange)
    div.classList.remove("disabled")
    div.classList.add("enabled")
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        shortenedDivId = button.id.slice(9)
        test(shortenedDivId)
    })
})

activateButton.addEventListener("click", () => {
    powers.forEach(power => {
    power.classList.remove("disabled")
    power.classList.add("enabled")
})
})

deactivateButton.addEventListener("click", () => {
    powers.forEach(power => {
    power.classList.remove("enabled")
    power.classList.add("disabled")
})
})

// bracket pair colorizer