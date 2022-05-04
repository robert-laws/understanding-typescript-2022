// number, string, and boolean types
let numberOne: number;
numberOne = 235;

let myPlace: string;
myPlace = 'London';

let isAvailable: boolean;
isAvailable = true;

// object type
const newObj: {
  name: string;
  age: number;
} = {
  name: 'Bob',
  age: 34,
};

// array type
const hobbies: string[] = ['Sports', 'Cooking', 'Reading'];
const ages: number[] = [34, 35, 36];

// tuple
const employee: [number, string] = [123, 'Bob'];

// enum
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

let person = Role.ADMIN;

// any type
let items: any[] = [1, 'Bob', true];

// union type
let mixed: string[] | string = 'Bob';
mixed = ['Bob', 'Smith'];

// literal types
let myOptions: 'take away' | 'delivery';

// type alias
type IdNumber = number | string;

function getUserId(id: IdNumber): IdNumber {
  return id;
}

type User = {
  id: IdNumber;
  name: string;
  age: number;
};

// functions
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function greeting(personName: string): void {
  console.log(`Hello ${personName}`);
}

// function types
let mathematics: (a: number, b: number) => number;
mathematics = add;

console.log(mathematics(4, 7));

// function types and callbacks
function addNumbers(n1: number, n2: number, cb: (a: number) => number): number {
  return cb(n1 + n2);
}

let myFunction = addNumbers(4, 6, (num) => {
  return num * num;
});

console.log(myFunction);

// unknown type
let userInput: unknown;
let userName: string;

if (typeof userInput === 'string') {
  userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError('An error occurred!', 500);
// let button = document.querySelector('button');
