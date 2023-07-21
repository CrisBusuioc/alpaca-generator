const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imagesDir = path.join(__dirname, '..', 'client', 'alpaca-generator-parts', 'alpaca', 'backgrounds');

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, '..', 'client')));

// Route handler for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Route handler to fetch the list of images
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
