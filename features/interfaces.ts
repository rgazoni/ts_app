//Creating another new custom type like a number, string and so on.
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};


const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};
printVehicle(oldCivic);


//With the use of interfaces
interface Reportable {
    summary():string;
};

//Polo just need to have summary func that returns a string, to be considered Reportable
const newPolo = {
    name: 'polo',
    year: 2019,
    broken: false,
    summary(): string {
        return `Name ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
};


const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};
printSummary(newPolo);
printSummary(drink);