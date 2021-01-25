const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(
      'index',
      {
        title: 'index',
      },
    );
  });

app.listen('3000', () => {
    debug('PS Project Running on port 3000!');
  });