//Higher order function: all middlewares are written based on high order function
//Curry function
/* function makeCake(milk) {
      return function (sugar) {
            return function (cream) {
                  return function (color) {
                        return function (bread) {
                              return `${milk}${sugar}${bread}${cream}${color}`;
                        }
                  }
            }
      }
} */
const makeCake = milk => sugar => cream => color => bread => `${milk}${sugar}${bread}${cream}${color}`;
const res = makeCake('milk')('sugar')('cream')('color')('bread');
console.log(res);