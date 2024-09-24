function greeting(name) {
  console.log(`Hello ${name} Ji`);
}

function getUserInput(callback) {
  var name = prompt (`Please enter your name: `);
  callback(name);
}

getUserInput(greeting);