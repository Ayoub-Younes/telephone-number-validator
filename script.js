const number = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const dialButtons = document.querySelectorAll(".dial-button")

const regone = /^1 \d{3}-\d{3}-\d{4}$/;
const regtwo = /^1 \(\d{3}\) \d{3}-\d{4}$/;
const regthree = /^1\(\d{3}\)\d{3}-\d{4}$/;
const regfour = /^1 \d{3} \d{3} \d{4}$/;
const regfive = /^\d{10}$/;
const regsix = /^\d{3}-\d{3}-\d{4}$/;
const regseven = /^\(\d{3}\)\d{3}-\d{4}$/;
const regex = [regone,regtwo,regthree,regfour,regfive,regsix,regseven];
const test = num => regex.some(reg => reg.test(num))

const checkNum = () => {
if(!number.value){
  return alert("Please provide a phone number")
  } else if(test(number.value)){
  result.innerHTML = `Valid US number: ${number.value}`
  } else {
  result.textContent = `Invalid US number: ${number.value}`
  }
}

dialButtons.forEach(button => {
  button.addEventListener("click", () => {
    number.value += button.id;
  });
});

check.addEventListener("click", checkNum);
clear.addEventListener("click", () => {
  result.textContent = ""
  number.value = ""
});

number.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkNum();
  }
  
});
