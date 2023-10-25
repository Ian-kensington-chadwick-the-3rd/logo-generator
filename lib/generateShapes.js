// make a parent container 
// make a child container that inherits the object shapes
// 
// const index = require('index.js')


class Shape {
    constructor(color, text, textcolor){
     this.color = color
     this.text = text
     this.textcolor = textcolor
    }
     circle(){
        return `<svg width="300" height="200">
       <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}"/>
       <text x="50" y="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
       </svg>`
    }
    square(){
        return `<svg width="300" height="200">
        <rect x="10" y="10" width="80" height="80"  stroke="black" stroke-width="3" fill ="${this.color}"/>
        <text x="50" y="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`

    }
    triangle(){
        return `<svg width="300" height="200">
        <polygon points="50,10 10,90 90,90"  stroke="black" stroke-width="3" fill="${this.color}"/>
        <text x="50" y="50" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`
    }
};



function generateShapes(data){
    const shape = new Shape(data.color, data.text, data.textcolor)
if('circle' == data.logo){
    return shape.circle()
} else if('triangle' == data.logo){
    return shape.triangle()
} else if('square' == data.logo){
    return shape.square()
} 
};
module.exports = {
    generateShapes,
    Shape

};








// function circle(data){
// return `<svg width="300" height="200">
// <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.color}"/>
// <text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
// </svg>`
// };


// function square(data){

// return `<svg width="300" height="200">
// <rect x="10" y="10" width="80" height="80"  stroke="black" stroke-width="3" fill ="${data.color}"/>
// <text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
// </svg>`
// };

// function triangle(data){
//  return `<svg width="300" height="200">
// <polygon points="50,10 10,90 90,90"  stroke="black" stroke-width="3" fill="${data.color}"/>
// <text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
// </svg>`
// };