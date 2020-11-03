// Import et instanciation
const express = require('express');
const port = 3000;

const app = express();


// exercice 0

app.get('/', (req, res) => {
  console.log(req);
  res.send('Authors API');
});


// exercice 1
const authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK'];

app.get('/authors/:id/', (req, res, next) => {

  res.send(authors[req.params.id - 1]);

});

// exercice 2

const books = ['Beowulf', 'Hamlet, Othello, Romeo and Juliet, MacBeth', 'Oliver Twist, A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being Earnest'];

app.get('/authors/:id/books/', (req, res, next) => {
  const id = req.params.id;

  if (id > authors.length) {

    res.send(`the author with ${id} does not exist`);

  } else {


    res.send(books[id - 1]);
  }
});


// exercice 3

app.get('/cars/', (req, res) => {
  console.log(req);
  res.send('error');
});



// exercice 4 = améliorer méthode 
const authorsAndBooks = {authorsAndBooks:['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK' ]};

app.get('/json/authors/:id/', (req, res) => {
 
      const { name, nationality } = authorsAndBooks[req.params.id - 1]
      res.json({
          name,
          nationality
      });
  
});

app.get('/json/authors/:id/books', (req, res) => {
 
      const { books } = authorsAndBooks[req.params.id - 1]
      res.json({ books });
  
});




// Run server 
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});



