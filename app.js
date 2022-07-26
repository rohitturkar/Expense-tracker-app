const element=document.querySelector("#addExpense");

let totalExpense=0;

const headingElement=document.querySelector("#heading");
headingElement.textContent=totalExpense;

element.addEventListener("click",()=>{
const inputElement=document.querySelector("#inputAmount");

let textValue=inputElement.value;
let expense=parseInt(textValue,10);

totalExpense=totalExpense+expense;
headingElement.textContent=totalExpense;


});