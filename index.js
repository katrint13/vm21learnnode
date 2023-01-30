const express = require('express');
const path =require('path');
const app = express();
const port = 3000
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
    
  res.render('index.njk');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
