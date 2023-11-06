const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders SVG with correct colors', () => {
  const triangle = new Triangle('red');
  expect(triangle.render()).toMatch(`<?xml version="1.0" standalone="no"?>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
  <polygon points="150,0 300,200 0,200" style="fill:red;stroke:black;stroke-width:1" />
  <text x="150" y="130" fill="white" font-size="50" text-anchor="middle">TEST</text>
  </svg>`);
});

test('Circle renders SVG with correct colors', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toMatch(`<?xml version="1.0" standalone="no"?>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
  <circle cx="150" cy="100" r="80" fill="blue" />
  <text x="150" y="115" fill="white" font-size="50" text-anchor="middle">TEST</text>
  </svg>`);
});

test('Square renders SVG with correct colors', () => {
  const square = new Square('green');
  expect(square.render()).toMatch(`<?xml version="1.0" standalone="no"?>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
  <rect x="50" y="50" width="200" height="200" style="fill:green;stroke:black;stroke-width:1" />
  <text x="150" y="130" fill="white" font-size="50" text-anchor="middle">TEST</text>
  </svg>`);
});