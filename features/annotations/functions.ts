//Type inference only works around the return value of a func, not the arguments.
//Or we can explicit define output with  (...): number
//We'll use explicit annotiation for the output.
const add = (a: number, b: number): number => {
    return a + b;    
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger1 = (message: string): void => {
    console.log(message);
    return undefined;
}
const logger2 = (message: string): never => {
    throw new Error(message);
}



const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);
