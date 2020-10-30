// Import et instanciation
const express = require('express');
const port = 3000;

const app = express();


// exercice 0

app.get('/', (req, res) => {
    //console.log(req);
  //res.send('Authors API');
});


// exercice 1
const authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK'];

app.get('/authors/:id/', (req, res,next) => {
  
  res.send(authors[req.params.id -1]);

});

// exercice 2

const books= ['Beowulf','Hamlet, Othello, Romeo and Juliet, MacBeth','Oliver Twist, A Christmas Carol','The Picture of Dorian Gray, The Importance of Being Earnest'];

app.get('/authors/:id/books/', (req, res,next) => {
  
    res.send(books[req.params.id -1]);

});

// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

// exercice 3



