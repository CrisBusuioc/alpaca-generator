const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imagesDir = path.join(__dirname, '..', 'client', 'alpaca-generator-parts', 'alpaca', 'backgrounds');

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Alpaca Generator!');
});

// Define the '/get-images' route handler to serve image filenames (as before)
app.get('/get-images', (req, res) => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ error: 'Error reading directory.' });
    } else {
      res.json({ images: files });
    }
  });
});

const port = 3000; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
