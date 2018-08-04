'use strict'
// Only difference between map and weakmap is weakmap gets garbage collected whereas map doesn't
var map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'threee');

if(map.has(1)) {
    console.log(true);
}

for(var key of map.keys()) {
    console.log(key);
}
console.log('=============');
for(var val of map.values()) {
    console.log(val)
}
console.log('=============');
for(var [key, val] of map) {
    console.log(key, val);
}
console.log('=============');
for(var [key, val] of map.entries()) {
    console.log(key, val);
}
console.log('=============');