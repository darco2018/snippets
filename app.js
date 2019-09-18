/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: 'true' }));

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


app.post('/addsnippet', (req, res) => {
  console.log('POST sends a snippet...');
  console.log(req.body);

  /* const newMockSnippet = {
    id: inMemoryDb.length + 1,
    title: 'Start express/node app',
    content: 'snippet proper default',
    lg: 'lg default',
    desc: 'default description',
  }; */
  const newId = inMemoryDb.length + 1;
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
  res.send('Oops, sth went wrong!');
});


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
