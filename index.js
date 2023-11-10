const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const startApp = async () => {
    console.log(`

    ██╗░░░░░░█████╗░░██████╗░░█████╗░
    ██║░░░░░██╔══██╗██╔════╝░██╔══██╗
    ██║░░░░░██║░░██║██║░░██╗░██║░░██║
    ██║░░░░░██║░░██║██║░░╚██╗██║░░██║
    ███████╗╚█████╔╝╚██████╔╝╚█████╔╝
    ╚══════╝░╚════╝░░╚═════╝░░╚════╝░
    
    ███╗░░░███╗░█████╗░██╗░░██╗███████╗██████╗░
    ████╗░████║██╔══██╗██║░██╔╝██╔════╝██╔══██╗
    ██╔████╔██║███████║█████═╝░█████╗░░██████╔╝
    ██║╚██╔╝██║██╔══██║██╔═██╗░██╔══╝░░██╔══██╗
    ██║░╚═╝░██║██║░░██║██║░╚██╗███████╗██║░░██║
    ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝
    `)

    generateShape();
};


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
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for the shape:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (in CSS format) for the shape:',
        },
    ]);
};

const generateShape = async () => {
    try {
        const shapeType = await getShapeInput();
        const color = await getColorInput();
        const textProp = await getTextInput();

        let shape;

        // Adds color and text properties to Shape
        switch (shapeType.shape) {
            case 'Triangle':
                shape = new Triangle(color.color, textProp.text, textProp.textColor);
                break;
            case 'Circle':
                shape = new Circle(color.color, textProp.text, textProp.textColor);
                break;
            case 'Square':
                shape = new Square(color.color, textProp.text, textProp.textColor);
                break;
            default:
                console.log('Invalid shape selection');
                return;
        }
        //Vars for creating and placing Logo SVG into examples/
        const svgContent = shape.render();
        const fileName = `examples/${shapeType.shape.toLowerCase()}_logo.svg`;

        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

startApp();

module.exports = {
    getShapeInput,
    getColorInput,
    getTextInput,
    generateShape,
};