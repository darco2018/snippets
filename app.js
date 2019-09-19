/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: 'true' }));

let idCounter = 3;
const inMemoryDb = [
  {
    id: 0,
    title: 'Read from file',
    content: 'snippet proper one',
    lg: 'java',
    desc: 'one description',
  },
  {
    id: 1,
    title: 'Write and Read from file',
    content: 'snippet proper two',
    lg: 'java script',
    desc: 'two description',
  },
  {
    id: 2,
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


app.post('/addsnippet', (req, res) => {
  console.log('/addsnippet entered with POST...');
  const requestBodyStr = JSON.stringify(req.body);
  // / without stringify next line displays Object object
  console.log(`Body of request: ${requestBodyStr}`);

  const newId = idCounter++;
  const newTitle = !req.body.title ? `Snippet nr ${newId}` : req.body.title;
  const newContent = !req.body.content ? 'No content' : req.body.content;
  const newLg = !req.body.lg ? 'Unknown' : req.body.lg;
  const newDesc = !req.body.desc ? 'No description' : req.body.desc;

  const newSnippet = {
    id: newId,
    title: newTitle,
    content: newContent,
    lg: newLg,
    desc: newDesc,
  };
  inMemoryDb.push(newSnippet);

  res.redirect('/');
});

app.get('*', (req, res) => {
  res.send('Oops, sth went wrong! No page like this!');
});


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
