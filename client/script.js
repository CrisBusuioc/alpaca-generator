const { response } = require("express")


function randomBackground() {
  fetch('/get-images').then((response) => response.json()).then(console.log(response))
}

// Usage example:
console.log(randomBackground())
