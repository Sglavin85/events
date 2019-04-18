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

//this allows the purple box to grow and shrink in correlation with the scrolling of the document. The difficulties were identifying what was scrolling, and ensuring that the information pushed to the style changes was a string which included the proper syntax ("px"). 

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


//Below is the function to iterate over the buttons and apply the CSS changes over the corresponding divs.

//Had difficulty figuring out how to make that happen, used console log to see the .id of the buttons and used the slice method to remove them a portion of the id and the result was the id of the corresponding div: Ex: activate-flight ID I removed the first 9 characters and the result was flight, which was the ID for the div I wanted to affect, I then used that as a parameter for the test function seen below.

buttons.forEach(button => {
    button.addEventListener("click", () => {
        shortenedDivId = button.id.slice(9)
        test(shortenedDivId)
    })
})

//In this example I wanted a single button to affect multiple divs, I tried just applying it to all of them but that didnt work so I ran a forEach loop over the array I created from the powers variable from above.

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