// intersection types
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const bob: ElevatedEmployee = {
  name: 'Bob',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guards - checking if a certain property or type exists before using it
function math(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

function printEmployeeInformation(employee: ElevatedEmployee) {
  console.log(`Name: ${employee.name}`);
  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  if ('startDate' in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

printEmployeeInformation(bob);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type EmployeeVehicle = Car | Truck;

const ev1 = new Car();
const ev2 = new Truck();

function useEmployeeVehicle(vehicle: EmployeeVehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useEmployeeVehicle(ev1);
useEmployeeVehicle(ev2);

// discriminated unions
interface Dog {
  type: 'dog';
  runningSpeed: number;
}

interface Fish {
  type: 'fish';
  swimmingSpeed: number;
}

type Pet = Dog | Fish;

function movePet(pet: Pet) {
  let speed: number;
  switch (pet.type) {
    case 'dog':
      speed = pet.runningSpeed;
      break;
    case 'fish':
      speed = pet.swimmingSpeed;
      break;
  }
  console.log('Moving with speed: ' + speed);
}

movePet({ type: 'dog', runningSpeed: 40 });
movePet({ type: 'fish', swimmingSpeed: 20 });

// type casting
const myInput = document.querySelector('input') as HTMLInputElement;
// const myInput = <HTMLInputElement>document.querySelector('input');
myInput.value = 'Hi there!';

// index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorCollection: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
};

// function overloads
function combination(a: number, b: number): number;
function combination(a: string, b: string): string;
function combination(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = combination(1, 2);
const result2 = combination('Bob', 'Cobb');

// optional chaining
const fetchUserData = {
  id: 'u1',
  name: 'John',
  job: {
    title: 'CEO',
    description: 'My own company',
  },
};

console.log(fetchUserData?.job?.title);

// nullish coalescing
const webUserInput = null;
const storedData = {
  id: 'u1',
  userInput: webUserInput ?? 'DEFAULT', // only set userInput to 'DEFAULT' if webUserInput is null or undefined
};

console.log(storedData.userInput);
