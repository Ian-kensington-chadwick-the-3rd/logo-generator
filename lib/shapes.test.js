// const generateShape = require('./generateShape');

// test('generating shape', () => {



    
// });


const { generateShape, Shape } = require('./generateShapes');

test('circle function should return valid SVG', () => {
  const testData = {
    color: 'red',
    textcolor: 'white',
    text: 'Test Circle',
  };
  const shape = new Shape(testData.color, testData.text, testData.textcolor)
  

  const circleResult = shape.circle();
  
  expect(circleResult).toContain(testData.color);
  expect(circleResult).toContain(testData.textcolor);
  expect(circleResult).toContain(testData.text);
});

test('square function should return valid SVG', () => {
    const testData = {
      color: 'red',
      textcolor: 'white',
      text: 'Test Circle',
    };
    const shape = new Shape(testData.color, testData.text, testData.textcolor)
    
  
    
    const squareResult = shape.square();
   
    // You can use expect to make assertions about the result
   
    expect(squareResult).toContain(testData.color);
    expect(squareResult).toContain(testData.textcolor);
    expect(squareResult).toContain(testData.text);
  });

  test('triangle function should return valid SVG', () => {
    const testData = {
      color: 'red',
      textcolor: 'white',
      text: 'Test Circle',
    };
    const shape = new Shape(testData.color, testData.text, testData.textcolor)
    
  
    
    const triangleResult = shape.triangle();
   
    // You can use expect to make assertions about the result
   
    expect(triangleResult).toContain(testData.color);
    expect(triangleResult).toContain(testData.textcolor);
    expect(triangleResult).toContain(testData.text);
  });



  
 // const squareResult = shape.square();
    // const shape = new Shape(testData.color, testData.text, testData.textcolor)
    
    // // You can use expect to make assertions about the result
   
    // expect(squareResult).toContain(testData.color);
    // expect(squareResult).toContain(testData.textcolor);
    // expect(squareResult).toContain(testData.text);