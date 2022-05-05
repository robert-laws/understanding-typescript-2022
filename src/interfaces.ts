// interfaces - used to describe the shape of an object
interface Named {
  readonly name?: string;
  nickname?: string; // optional property
}

interface Greetable extends Named {
  greeting(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 53;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greeting(phrase: string) {
    if (this.name) {
      console.log(`Hi, I'm ${this.name}, ${phrase}`);
    } else {
      console.log(`Hi! ${phrase}`);
    }
  }
}

let userOne: Greetable;
let userTwo: Greetable;

userOne = new Person('Melvin');
userTwo = new Person();

// userOne = {
//   name: 'John',
//   age: 30,
//   greeting(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

userOne.greeting('How are you?');
userTwo.greeting('Welcome to the course!');

// type AddFn (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let addValues: AddFn;

addValues = (n1: number, n2: number) => {
  return n1 + n2;
};
