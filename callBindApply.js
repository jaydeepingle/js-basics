var callA = {
    value: 1
}

function addA(a, b, c) {
    return this.value + a + b + c;
}

console.log(addA.call(callA, 5, 6, 7)); // 19

var arr = [5, 6, 7];
console.log(addA.apply(callA, arr)); // 19

var bound = addA.bind(callA);
console.log(bound(5, 6, 7));   // 19