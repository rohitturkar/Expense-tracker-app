const element=document.querySelector("#addExpense");

let totalExpense=0;
//get the heading Element
const headingElement=document.querySelector("#heading");
//ref to input Amount
const inputElement=document.querySelector("#inputAmount");
//get the reference to disc element
const inputDescEl=document.querySelector("#inputDesc")
//set the headingElement to totalExpense
headingElement.textContent=totalExpense;

// all expenses at once place

const allExpenses=[];

element.addEventListener("click",()=>{

    const expenseItem ={};

//read the value from inputElement
let textAmount=inputElement.value;

//read the value from the  inputDescE1

let textDesc=inputDescEl.value;

//converting the value into the number
let expense=parseInt(textAmount,10);

//put it in object
expenseItem.desc=textDesc;
expenseItem.amount=expense;
allExpenses.push(expenseItem);
console.clear();
console.table(allExpenses);


totalExpense=totalExpense+expense;
headingElement.textContent=totalExpense;


});