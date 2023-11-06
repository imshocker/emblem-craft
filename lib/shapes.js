class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    // The base class doesn't implement rendering as it's abstract.
    // Each specific shape will have its own implementation.
    return '';
  }
}

class Triangle extends Shape {
  render() {
    return `<?xml version="1.0" standalone="no"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
<polygon points="150,0 300,200 0,200" style="fill:${this.color};stroke:black;stroke-width:1" />
<text x="150" y="125" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>
</svg>
    `;
  }
}

class Circle extends Shape {
  render() {
    return `<?xml version="1.0" standalone="no"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
<circle cx="150" cy="100" r="80" fill="${this.color}" />
<text x="150" y="115" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>
</svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `<?xml version="1.0" standalone="no"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="200" width="300">
<rect x="50" y="50" width="200" height="200" style="fill:${this.color};stroke:black;stroke-width:1" />
<text x="150" y="115" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>
</svg>
    `;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};