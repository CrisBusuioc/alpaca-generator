

function randomBackground() {
  const randomDir = "C:/Users/user/Documents/vscode/alpaca-generator/alpaca-generator-assets/alpaca/backgrounds";
  const fs = require('fs');
  const files = fs.readdirSync(randomDir);

  if (files.length === 0) {
    console.log('No files found in the directory.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFileName = files[randomIndex];

  const imagePath = randomDir + '/' + randomFileName;
  // At this point, 'imagePath' contains the randomly selected file path.
  // You can use this path to set the 'src' attribute of an image element in your HTML.

  console.log('Random image path:', imagePath);
  return imagePath;
}

// Usage example:
console.log(randomBackground())
