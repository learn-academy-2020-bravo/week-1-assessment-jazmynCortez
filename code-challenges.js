// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//Make a function that is called temperatureChecker
const temperatureChecker = (temp) => {
  //Create an if statement stating that temp is below boiling point
  if (temp < 212){
    //return "35 is below boiling point"
    return `${temp} is below boiling point`
  }
  //Create an else if statement stating that temp is above boiling point
  else if (temp > 212) {
    //return "350 is above boiling point"
    return `${temp} is above boiling point`
  }
  //Create an else if statement stating that temp is at boiling point
  else if (temp === 212){
    //return "212 is at boiling point"
    return `${temp} is at boiling point`
    //Create else "broken"
  } else {
    return "broken"
  }
}
//console.log(temperatureChecker(temp)) and put in variables given above
console.log(temperatureChecker(35));
console.log(temperatureChecker(350))
console.log(temperatureChecker(212))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var arr = [3, 7, 0, 6, -9]
//Create for loop
for(let i=0; i<arr.length; i++){
  //console.log() and have the array being multiplied by 5
  console.log(arr[i] * 5)
}

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
//create a const variable to make sure the variable name doesn't change
//make it a function
//use the map method to be able to go thorugh the array and multiply each index by 5
const multiplyer = myNumbers2.map(value => value * 5)

//call it using console.log()
console.log(multiplyer);


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//create const variable connected to the function and put the term string within the parenthesis
const noVowels = (string) => {
  //create a let variable stating what vowels are
 let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
 //create a let variable that will filter through the array and split the indexes to be able to be easily accessed
 let array = string.split("")
 //create a return statement that will filter through the array and add in .join to join the constanants together
 return array.filter(value => vowels.indexOf(value) === -1).join("")
}
//console.log() both variables given
console.log(noVowels(stringWithVowels1));
console.log(noVowels(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//create const variable connected to the function and put the term string within the parenthesis
const noVowels = (string) => {
  //create a let variable stating what vowels are
 let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
 //create a let variable that will filter through the array and split the indexes to be able to be easily accessed
 let array = string.split("")
 //create a return statement that will filter through the array and add in .join to join the constanants together
 return array.filter(value => vowels.indexOf(value) === -1).join("")
//}
//at this point I think I need to change it to a type of type statement? so that way it would go thorugh and give me a boolean OR number... but IDK how to do that....
console.log() both variables given
console.log(noVowels(stringWithVowels1));
console.log(noVowels(stringWithVowels2))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

//make all variables stackes above one another
var toonimals = [
  {name: "Itchy", animal: "mouse"},
  {name: "Stimpy", animal: "cat"},
  {name: "Daffy", animal: "duck"},
  {name: "Scratchy", animal: "cat"},
  {name: "Ren", animal: "dog"},
  {name: "Felix", animal: "cat"}]
//create a variable function entitles animal - make it filter thorugh the indexes to only be able to find "cats"
var animal = toonimals.filter(value => value.animal === "cat")
//console.log() the code to call it
console.log(animal);

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
//make all variables stackes above one another
var toonimals = [
  {name: "Itchy", animal: "mouse"},
  {name: "Stimpy", animal: "cat"},
  {name: "Daffy", animal: "duck"},
  {name: "Scratchy", animal: "cat"},
  {name: "Ren", animal: "dog"},
  {name: "Felix", animal: "cat"}]
//create a variable function entitles animal - make it filter thorugh the indexes to only be able to find non cat names
var animal = toonimals.filter(value => value.animal !== "cat")
//console.log() the code to call it
console.log(animal);
//Maybe destructure the code further? How can i take the answers from what I have and bring it down even further to just names? I'm confused, does this need to be what JSON is?? I need to go over objects more haha
