const arrayLikeObject = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};

console.log(Array.prototype.slice.call(arrayLikeObject, 1));