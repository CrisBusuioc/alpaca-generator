
// Script function
function randomBackground() {
  // Client-side code
fetch('/get-images')
  .then(response => response.json())
  .then(data => {
    // Handle the received data, which may contain the list of images
    console.log(data.images);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error fetching images:', error);
  });

}

// Usage example:
console.log(randomBackground())
