//Debug and fix Syntax, Runtime and Logical Errors

// function calculateArea(width, height {
// return width + height;
// }
// let width = 10 height = 5;
// if (area > 100) {
//   console.log("The area is large.");
// } else {
//   console.log("The area is small.");
// }
// if (width + height > 100) {
//   console.log("Area is greater than or equal to 100");
// }

// fix
function calculateArea(width, height) {
  return width * height; // Change '+' to '*'
}

let width = 10;
let height = 5; // Add a semicolon here
let area = calculateArea(width, height); // Call the function to calculate area

if (area > 100) {
  console.log("The area is large.");
} else {
  console.log("The area is small.");
}

if (area >= 100) {
  // Use 'area' instead of 'width + height'
  console.log("Area is greater than or equal to 100");
}
