import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm';

let dataReceived;

// Script function
function randomBackground() {
  // Client-side code
  axios.get('http://localhost:3000/get-images')
  .then(res => {
  dataReceived = res.data.images

  document.getElementById('image').src = 'alpaca-generator-parts/alpaca/backgrounds' + `/${dataReceived[Math.floor(Math.random() * 18)]}`
})
}
// Usage example:
randomBackground()