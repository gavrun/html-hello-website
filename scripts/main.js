let myHeading = document.querySelector('h1');
myHeading.textContent = "My hello page!";
//myHeading;

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

document.querySelector("h1").addEventListener("click", function () {
    alert("Careful! That's header!");
});

// first image on the page
document.querySelector("img").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {

    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/example.png") {
        myImage.setAttribute("src", "images/example_copy.png");
    } else {
        myImage.setAttribute("src", "images/example.png");
    }
});

let myHeadinM = document.querySelector(".js");
let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeadinM.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeadinM.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

