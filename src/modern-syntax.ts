// modern syntax
const myName = 'Bob';
let age = 32;

const checkAge = (age: number): boolean => (age > 18 ? true : false);

const multiply = (x: number, y: number = 2): number => x * y;
// console.log(multiply(9));

const myItems: string[] = ['Bob', 'Fred', 'Mary'];
const newPeople: string[] = ['Kal', 'Mel', 'Sue'];

myItems.push(...newPeople);

const newPerson = {
  personName: 'Bob',
  personAge: 32,
  personHobbies: ['Sports', 'Cooking'],
};

const copiedPerson = { ...newPerson };

const combineValues = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a * b, 1);
};

console.log(combineValues(1, 2, 3, 4, 35, 62, 16, 83));

const [person1, person2, person3] = newPeople;
const { personName: myUserName, personAge, personHobbies } = newPerson;
