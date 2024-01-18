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
//     const strArray = str.split('')
// // create a new Array
//     const cleanStrArray = []

//     //loop through the splitted string
//       for(let i = 0; i< strArray.length; i++){
//          //check if this signs are in the the strArray 
//          if(!['+', '-', " "].includes(strArray[i])){
//             //push to new array
//            cleanInputString.push(strArray[i])
//          }
//       }
 // moving to regex 
     // check for the avaliability of the signs and whitespace
    const regex = /[+-\s]/g
     
    //return the checked string and replace with an empty string
     return str.replace(regex, "")

  }

  //
   function isInvalidInput(str) {
    //regex for letter e
    //the e is set to insensitive and checks is found between this number range
    const regex = /\d+e\d+/i // \d checks the occurance found in the str

    //using match to filter out the regex
     return str.match(regex)
    
   }


   function addEntry(){
    //adding concatenation to the the dropdown
       const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
   }