const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//Type alias
type Drink = [string, boolean, number];

//Tuple
//Annotation that makes this variable a tuple
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 70];
const tea: Drink = ['brown', false, 30];

//Why tuples:
//Not to much usable
const carSpecs: [number, number] = [400, 3354];
//Obj not to usable
const carStats = {
    horsepower: 400,
    weight: 3354
}