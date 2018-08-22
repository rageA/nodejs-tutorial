const express = require('express');
const port = 5000;
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');



//connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true
}).then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))
;

// Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');


const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});