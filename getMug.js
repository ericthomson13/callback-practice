const pourCoffeeIntoMug = require('./pourCoffeeIntoMug');

module.exports = function getMug(callback) {
   setTimeout(() => {
     console.log('getting mug from cabinet');
		 pourCoffeeIntoMug(callback);
   }, 1000);
}
