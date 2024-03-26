const arrayOfObjects = [
  {
    one: 1
  },
  {
    two: 2
  },
  {
    three: 3
  },
  {
    four: 4
  }
];

const slicedArrayOfObjects = arrayOfObjects.slice(1);

console.log(slicedArrayOfObjects);

console.log(arrayOfObjects[1] === slicedArrayOfObjects[0]);
