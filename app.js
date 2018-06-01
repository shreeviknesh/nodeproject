const express = require('express');
const app = express();

const port = 5500;

app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, err => {
    console.log(`Server Running on Port:${port}`);
});