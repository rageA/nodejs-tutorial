const express = require('express');
const bodyParser = require('body-parser')
const port = 5000;
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

//declare routes
const aboutRoute = require('./controllers/routes/about');
const indexRoute = require('./controllers/routes/index');
const ideasRoute = require('./controllers/routes/ideas');

//connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true
}).then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))
    ;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

app.use('/', indexRoute);
app.use('/about',aboutRoute)
app.use('/ideas', ideasRoute)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});