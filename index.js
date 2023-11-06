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
    },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color (in CSS format) for the text:',
        });
};

const generateShape = async () => {
    try {
        const shapeType = await getShapeInput();
        const color = await getColorInput();
        const textProp = await getTextInput();

        let shape;

        switch (shapeType.shape) {
            case 'Triangle':
                shape = new Triangle(color.color, textProp.text, textProp.textColor); // Pass text to the Triangle constructor
                break;
            case 'Circle':
                shape = new Circle(color.color, textProp.text, textProp.textColor); // Pass text to the Circle constructor
                break;
            case 'Square':
                shape = new Square(color.color, textProp.text, textProp.textColor); // Pass text to the Square constructor
                break;
            default:
                console.log('Invalid shape selection');
                return;
        }
        const svgContent = shape.render();
        const fileName = `examples/${shapeType.shape.toLowerCase()}_logo.svg`;

        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

generateShape();