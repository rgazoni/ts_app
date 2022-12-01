const carMakers = ['ford', 'toyota', 'Volks'];

const cars: string[]= [];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['Fiesta'],
    ['Corola'],
    ['Polo']
];
const engines: string[][] = [];

//Help with inference when extracting values
const myCar = carsByMake[2][0];

// Prevent incompatible values
// err -> carMakers.push(1);

//Flexible types
//const importantDates = [new Date(), '2018-09-18'];
const importantDates: (Date | string)[] = [new Date(), '2018-09-18'];
