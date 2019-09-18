/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

const inMemoryDb = [
  {
    id: 1,
    title: 'Read from file',
    content: 'snippet proper one',
    lg: 'java',
    desc: 'one description',
  },
  {
    id: 2,
    title: 'Write and Read from file',
    content: 'snippet proper two',
    lg: 'java script',
    desc: 'two description',
  },
  {
    id: 3,
    title: 'Regex',
    content: 'snippet proper three',
    lg: 'java',
    desc: 'some description three',
  },

];

app.get('/', (req, res) => {
  // res.send('Welcome to Snippets HOME page');
  res.render('index', { snippets: inMemoryDb });
});


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
