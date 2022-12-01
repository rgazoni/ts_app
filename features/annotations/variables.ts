//Type annotations -> Code to tell a TS what type of value a variable will refer to

let speed: string = 'fast'; 
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


//built in Objects
let now: Date = new Date();


//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true];


//Classes
class Car {

}
let car: Car = new Car();


//Object Literal
let point: { x:number; y:number } = {
    x: 10,
    y: 20
};


//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


//at the same line, TS can figure it out with Type Inference
let apples = 5;

//When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
//TS can not predict what we get back with JSON.parse
const coordinates = JSON.parse(json);
//any type -> TS has no idea what type is. Nasty for application. 
//Avoid variables with 'any' at all costs
coordinates.adasdaskhdaksdhklasjdhkjasd;
//Fix:
const json2 = '{"x": 10, "y": 20}';
const coordinates2: {x: number; y: number} = JSON.parse(json);
//coordinates2.adasdasd; -> Raises an error

// 2) Later initialization.
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
    if(words[index] === 'green'){
        foundWord = true;
    }
}

// 3) Variable whose type can not be inferred correctly
let numbers = [-10, -1, 20]
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > 0){
        numberAboveZero = numbers[index];
    }
}