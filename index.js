let cardName = document.getElementById("form-card-name");
let nameOnCard = document.getElementById("nameOnCard");
let errorNameMsg = document.getElementById("card-name-error");

let cardNumber = document.getElementById("form-card-number");
let numberOnCard = document.getElementById("numberOnCard");
let errorNumberMsg = document.getElementById("card-number-error");

let expMonth = document.getElementById("form-card-month");
let monthOnCard = document.getElementById("monthOnCard");
let errorDateYearMsg = document.getElementById("card-exp-date-year-error");

let expYear = document.getElementById("form-card-year");
let yearOnCard = document.getElementById("yearOnCard");

let cvv = document.getElementById("form-cvv");
let cvvOnCard = document.getElementById("cvvOnCard");
let errorCvv = document.getElementById("card-cvv-error");



cardNumber.addEventListener("input", numberChange);
function numberChange() {
    numberOnCard.innerHTML = cardNumber.value;
if(numberOnCard.innerHTML.length === 0) 
        errorNumberMsg.innerHTML = "Can't be blank";
    console.log(cardNumber.value.length);
} 



cardName.addEventListener("input", nameChange);
function nameChange() {
    nameOnCard.innerHTML = cardName.value;
} 

expMonth.addEventListener("input", monthChange);
function monthChange() {
    monthOnCard.innerText = expMonth.value;
} 

expYear.addEventListener("input", yearChange);
function yearChange() {
    yearOnCard.innerText = expYear.value;
} 

cvv.addEventListener("input", cvvChange);
function cvvChange() {
    cvvOnCard.innerText = cvv.value;
} 


const formContainer = document.getElementById("form-container");
const thankyou = document.querySelector(".thankyou");
const confirmBTN = document.getElementById("confirm-button");
const again = document.getElementById("continue");



confirmBTN.addEventListener("click", () => {
    thankyou.classList.remove("hidden");
    formContainer.style.display = "none";
});


again.addEventListener("click", onContinue);
function onContinue() {
    thankyou.classList.add("hidden");
    formContainer.style.display = "block";
}