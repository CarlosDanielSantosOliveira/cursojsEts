import _ from './modulo';

const array = [100, 200, 300, 400];

_.mul = function(array: number[]): number {
  
  return array.reduce((total, actual) => total * actual, 1);  
};

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));