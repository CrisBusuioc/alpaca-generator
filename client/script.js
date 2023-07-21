import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm';


// Script function
function randomBackground() {
  // Client-side code
axios.get('http://localhost:3000/get-images')
.then(res => console.log(res.data))
}

// Usage example:
console.log(randomBackground())
