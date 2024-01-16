//get the form 
const calorieCounter = document.querySelector("#calorie-counter")

//get the budget input
const budgetNumberInput = document.getElementById("budget")

//get the dropdown
const entryDropdown = document.getElementById("dropdown");

//the entry button
const addEntryButton = document.getElementById("add-entry");

//clear button
const clearButton = document.getElementById("clear");

//output div
const output = document.getElementById("output");


//set a variable to a boolean for now
 let isError = false

 //function to check if string is a number
  function cleanInputString(str) {
    //split the number
    const strArray = str.split('')

    const strCleanArray = []
  }