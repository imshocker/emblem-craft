class Shape {
    constructor(color, text) {
      this.color = color;
      this.text = text;
      this.textColor;
    }
  
    render() {
      
    }
  }

  class Triangle extends Shape {
    render() {
      return `
        <svg height="200" width="300">
          <polygon points="150,0 300,200 0,200" style="fill:${this.color};stroke:black;stroke-width:1" />
          <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `
        <svg height="200" width="300">
          <circle cx="150" cy="100" r="80" style="fill:${this.color};stroke:black;stroke-width:1" />
          <text x="150" y="110" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    render() {
      return `
        <svg height="200" width="300">
          <rect x="60" y="60" width="180" height="180" style="fill:${this.color};stroke:black;stroke-width:1" />
          <text x="150" y="150" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
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