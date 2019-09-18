/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Welcome to Snippets HOME page');
  res.render('index');
});


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
