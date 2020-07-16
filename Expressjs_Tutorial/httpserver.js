const Joi = require('joi');

const arrStr = ['banana', 'bacon', 'cheese'];
const arrObj = [{example: 'example1'}, {example: 'example2'}];

const userInput = {personalInfo: {
                    strAdd: 'Manhattan',
                    city: 'New York',
                    state: 'NY'
                },
                preferences: arrStr};

// create rule for the first object property
const personalInfoSchema = Joi.object().keys({
    strAdd: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required(),
});

// create rule for the second object property containing a string
const preferencesSchema = Joi.array().items(Joi.string());

//combine them into one schema(rule)
const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

// validate the combined rule
Joi.validate(userInput, schema, (err, result) => {
    if(err) {
        console.log(err);
    }else{
        console.log(result);
    }
});