const inquirer = require('inquirer')
const fs = require('fs')
const generateShapes = require('./lib/generateShapes.js')

const questions = 

    [{
        type: 'input',
        message: 'choose three characters for your logo',
        name: 'characters',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'input',
        message: 'choose a color for your text? Example: red or #FF0000 = red ',
        name: 'textcolor',
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },
    {
        type: 'choice',
        message: 'pick a shape for you logo',
        name: 'logo',
        choices: ['square', 'circle', 'triangle'],
        validate: (data)=>{ if(data) {return true} else{return 'i need a value to continue'}} 
    },

];


function writeToFile(data) {
  fs.writeFile('./Generated-logo/newlogo.svg', generateShapes(data), (err) => {
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