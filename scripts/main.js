let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/+15.jpg") {
    myImage.setAttribute("src", "images/-10.png");
  } else {
    myImage.setAttribute("src", "images/+15.jpg");
  }
});
let myButton = document.querySelector("button");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  myButton.addEventListener("click", () => {
    setUserName();
  });  