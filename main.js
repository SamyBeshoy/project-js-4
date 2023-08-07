document.title = "project-js-4";
let inputOne = document.getElementById("one1");
let inputTwo = document.getElementById("two2");
document.body.style.cssText = `
height: 100vh;
padding: 0;
margin: 0;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
background-image: linear-gradient(to bottom right, ${inputOne.value}, ${inputTwo.value});
`; 
inputTwo.style.cssText = `
margin: 15px;
`;
window.onload = function () {
  if (window.localStorage.getItem("input1") && window.localStorage.getItem("input2") !== null) {
    document.body.style.backgroundImage = `
    linear-gradient(to bottom right, 
      ${window.localStorage.getItem("input1")}, ${window.localStorage.getItem("input2")}
      `;
    inputOne.value = window.localStorage.getItem("input1");
    inputTwo.value = window.localStorage.getItem("input2");
    console.log("localStorage Not Empty")
  }
};
let allInputs = [inputOne, inputTwo]
allInputs.forEach(function (e) {
  e.addEventListener("blur", function () {
    window.localStorage.setItem("input1", inputOne.value);
    window.localStorage.setItem("input2", inputTwo.value);
    document.body.style.backgroundImage = `
    linear-gradient(to bottom right, ${window.localStorage.getItem("input1")}, 
    ${window.localStorage.getItem("input2")}
    `;
  })
});