const pourCoffeeIntoMug = require('./pourCoffeeIntoMug');

module.exports = function getMug() {
   setTimeout(() => {
     console.log('getting mug from cabinet');

   }, 1000);
}
