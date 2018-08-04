var a = {
    value: 1
}
a.__proto__.value = 2;

var b = Object.create(a);

b.value = 3;
b.__proto__.value = 4;

var c = Object.create(b);

c.value = 5;
c.__proto__.value = 6;

console.log(c.value);

// Here the c will look for value attribute in itself, later in it's prototype then in b's body then in b's prototype
// same goes with a