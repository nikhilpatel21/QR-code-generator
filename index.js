/* 
1. use the inquirer npm package to get user input.
2. use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/ 
// require wala nhi ho payega kyuki module wala hai
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here *///refer npm inquirer documentations
    {
        message:'Type in your url:',
        name:'URL'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL; // answers is an object 
    var qr_svg = qr.image(url,{type:'png'});
    qr_svg.pipe(fs.createWriteStream('qr-pic.png'));

    fs.writeFile("url.txt",url,(err)=>{
        if(err){
            throw err;
        }
        console.log('file saved');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


 

