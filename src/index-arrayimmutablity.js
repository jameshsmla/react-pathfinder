const numbers = [1, 2, 3, 4, 78, 810, 100];

Object.freeze(numbers);
//each item should be multipled by 2
/* const result = numbers.map(function (item, index) {
      return item * 2;
}); */
//Arrow function
/* const result = numbers.map((item, index) => {
      return item * 2;
}); */
const result = numbers.map(item => item * 2);
console.log(result);

//find even numbers 
/* const evenNumbers = numbers.filter(function (item) {
      //return boolean condition
      return item % 2 === 0;
}); */
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers);

//find even numbers and multiply those  by 3 : chainning filter + map

const sumofEvenNumbers = numbers.filter(item => item % 2 === 0)
      .map(item => item * 3);
console.log(sumofEvenNumbers);
///////////////////////////////////////////////////////////////////////////

const hotels = [{
            id: 1,
            name: 'A1',
            rating: 4,
            rate: 1000,
      },
      {
            id: 2,
            name: 'A2',
            rating: 2,
            rate: 2000,
      },
      {
            id: 3,
            name: 'A3',
            rating: 1,
            rate: 1500,
      },
      {
            id: 4,
            name: 'A4',
            rating: 5,
            rate: 6000,
      },
      {
            id: 5,
            name: 'A5',
            rating: 2,
            rate: 2800,
      }
];

//find all hotels whose rating is between 1 and 3, offer 10% discount ,list all hotels details with dicounted rate.

/* const hotelsResult = hotels.filter(hotel => {
      return hotel.rating >= 1 && hotel.rating <= 3;
}).map(hotel => {
      let discount = hotel.rate * 10 / 100;
      //let totalPrice = hotel.rate - discount;
      let rate = hotel.rate - discount;
      return {
            ...hotel,
            rate
      }
}); */
const hotelsResult = hotels.filter(hotel =>
      (hotel.rating >= 1 && hotel.rating <= 3)
).map(hotel => {
      let discount = hotel.rate * 10 / 100;
      //let totalPrice = hotel.rate - discount;
      let rate = hotel.rate - discount;
      return {
            ...hotel,
            rate
      }
});

console.log(hotelsResult);

//Add operation
const numList = [1, 2, 3];
Object.freeze(numList);
//numList.push(4);//mutable version
console.log(numList.concat(4));
console.log([...numList, 6]);

//remove item array :  slice and splice ,filter

const names = ['A', 'B', 'C', 'D', 'E'];

const namesResult = names.filter(name => name !== 'C');
console.log(namesResult);

//Update item array : slice and splice , map

const updatedNameList = names.filter(name => name === 'A').map(name => 'Angular');
console.log(updatedNameList);