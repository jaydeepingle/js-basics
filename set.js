'use strict'
var arr = [1, 2, 3, 4, 3, 4, 5, 7, 9];
var set = new Set(arr);
console.log(set);
set.add(10);
console.log(set.has(10));

var setB = new Set();
setB.add(2).add(5).add(6).add(7);

var difference = new Set([...set].filter(x => !setB.has(x)));
var intersection = new Set([...set].filter(x => setB.has(x)));

console.log("Difference: ", difference);
console.log("Intersection: ", intersection);