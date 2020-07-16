const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',  express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const people = require('./routes/people');

app.use('/people', people);

app.get('/:userQuery', (req,res) => {
    res.render('index', {data: {userQuery: req.params.userQuery,
                                searchResults : ['book1', 'book2', 'book3'],
                                loggedIn: true,
                                username: 'Ibraheem'}});
});

app.post('/', (req, res) => {
    console.log(req.body);
    // create the rule for the user input data
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    // validate the userInput
    Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('an error has occured');
        }else{
            console.log(result);
            res.send('success')
        }
    });
});

app.get('/example', (req, res) => {
    res.send('this is a new route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(3000);