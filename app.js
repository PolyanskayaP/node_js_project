const express = require('express');
const app = express();
const port = 3000;

//app.get('/', (req, res) => {
//  res.send('Привет, мир!');
//});

//app.get('/about', (req, res) => {
//    res.send('О нас');
//  });

app.get('/', (req, res) => {
    res.render('index');
  });

app.set('view engine', 'ejs');  

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

