// creating misc. functions
// this will give us a number between 1-100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit (){
    return (celcius * 9) / 5 + 32;
}
// common JS is the native node.js module system
// need to export it to use the functions in other files!!!
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
}
