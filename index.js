const inquirer = require('inquirer')
const fs = require('fs')
const generateShape = require('./lib/generateShapes.js')

const questions = 

    [{
        type: 'input',
        message: 'choose three characters for your logo',
        name: 'text',
        validate: (data) => data.length <= 3,
    },
    {
        type: 'input',
        message: 'choose a color for your logo! (red or #FF0000) ',
        name: 'color',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
      type: 'input',
      message: 'choose a color for your logo Text! (red or #FF0000) ',
      name: 'textcolor',
      validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'list',
        message: 'pick a shape for you logo!',
        name: 'logo',
        choices: ['square', 'circle', 'triangle'],
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },

];


function writeToFile(data) {
  fs.writeFile('./Generated-logo/newlogo.svg', generateShape(data), (err) => {
      if (err) throw err;
        console.log('Your logo has been generated!');
      });
};


function init() {
    inquirer
       .prompt(questions)
       .then((data) => {  
         console.log(data)
         writeToFile(data);
         })
       .catch((error) => {
         if (error.isTtyError) {
            console.log('Prompt couldnt be rendered in the current environment')
         } else {
           console.log('Something else went wrong')
           console.error(error)
         }
       })  
   };
   
init();