// /*/
// express used in real life uses the HTTP modules
// Javascript basics:
// variables, functions, loops, objects, classes
// callbacks, promises
// http methods - get, post, push, delete
// common errors - 404, 500, etc.
// we'll be creating APIs -- 

// NPM - node package manager
// v8 engine - written in C++ (used in Google chrome), converts code into machine code so your computer can work
// /*/
// // PRACTICE:
// console.log ('hello world');
// const firstName = 'Mariel'
// const lastName = 'Metalios'
// console.log(firstName);
// console.log(lastName);
// const greet = () => `Hello ${firstName} ${lastName}`;
// greet();
// console.log(greet());

// // console.log(global);

// // we can import our function now
// // const generateRandomNumber = require('./utils');

// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');
// console.log(`Celcius to fahrenheight: ${celciusToFahrenheit(2)}`);

import { getPosts } from './postController.js';

console.log(getPosts);


