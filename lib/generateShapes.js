// make a parent container 
// make a child container that inherits the object shapes
// 
// const index = require('index.js')

function Shapes(circle, square, triangle){
this.circle = circle;
this.square = square;
this.triangle = triangle;
};


function circle(data){
return `<svg width="100" height="100">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.color}" />
<text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
</svg>`
};


function square(data){

return `<svg width="100" height="100">
<rect x="10" y="10" width="80" height="80" fill ="${data.color}" />
<text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
</svg>`
};

function triangle(data){
 return `<svg width="100" height="100">
<polygon points="50,10 10,90 90,90" fill="${data.color}" />
<text x="50" y="50" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>
</svg>`
};

function generateShape(data){
if('circle' == data.logo){
    return circle(data)
} else if('triangle' == data.logo){
    return triangle(data)
} else if('square' == data.logo){
    return square(data)
} else {
    return '';
}
};
module.exports = generateShape;
