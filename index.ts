console.log('Hello TypeScript!')

// Implicit Types
let helloWorld = "Hello, World!";

// helloWorld = 5;

//Explicit types
let firstName: string = 'John';
let age: number = 30;

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber =["Hello", 10];

//Enums
enum Contients {
    North_America,
    South_America,
    Africa,
    Asia,
    Europe,
    Antritca,
    Austalia,
}

let regine = Contients.Africa; //2

//Interface
interface User {
    name: string;
    id: number;
}

const user: User = { 
    name: 'John',
    id: 0,
}

// Composing types -> Union

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
const windowState: WindowStates = "open";
