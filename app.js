const express = require('express');
const app = express();

const port = 5500;
const eventRouter = require('./src/routes/eventroutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs')

app.use('/Events', eventRouter);

app.get('/', (req, res) => {
    res.render('index', {
        nav: [
            { Link: 'Services', Text: 'Services'},
            { Link: 'Portfolio', Text: 'Portfolio'},
            { Link: 'About', Text: 'About'},
            { Link: 'Team', Text: 'Team'},
            { Link: 'Contact', Text: 'Contact'},
            { Link: 'Events', Text: 'Events'}
        ]
    });
})

app.listen(port, err => {
    console.log(`Server Running on Port:${port}`);
})