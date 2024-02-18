const express = require('express');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "Mani"

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/views/products.html');
});


app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}`);
  console.log(`Name is:${NAME}`)
});