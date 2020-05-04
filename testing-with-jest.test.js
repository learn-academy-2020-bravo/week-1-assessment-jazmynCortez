// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp", () => {
  test("num1 + num2 = newNum", () => {
    expect(addThemUp(2(3)).toEqual(5)
  })
})





// --------------------1b) See the test fail. THEN write the code to make the test pass.

//yes it failed

const addThemUp = (num1 , num2) => {
  return num1 + num2
}
console.log(addThemUp(2, 3));
//(I'm not sure why my jest won't only run in this file) but i'm getting scared to run out of time...

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test("num1*num2)(/2)", () => {
    expect(triangleArea(3(8)/2).toEqual(12)
  })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (num1 , num2) => {
  return (num1 * num2)/2
}
console.log(triangleArea(3 , 8));
