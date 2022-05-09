// generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Melvin' }, { age: 25 });
mergedObj.name;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let text = 'Received no value.';
  if (element.length === 1) {
    text = 'Received 1 element.';
  } else if (element.length > 1) {
    text = `Received ${element.length} elements.`;
  }
  return [element, text];
}
