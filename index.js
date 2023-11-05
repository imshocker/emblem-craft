const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const getShapeInput = async () => {
    const shapeQuestion = {
        type: 'list',
        name: 'shape',
        message: 'Select a shape to generate:',
        choices: ['Triangle', 'Circle', 'Square'],
    };

    return inquirer.prompt(shapeQuestion);
};

const getColorInput = async () => {
    return inquirer.prompt({
        type: 'input',
        name: 'color',
        message: 'Enter the color (in CSS format) for the shape:',
    });

};

const getTextInput = async () => {
    return inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter the text for the shape:',
    });
};