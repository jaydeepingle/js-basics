var a = 5; 
const f = function () {
    console.log(a);
    var a = 10;
}
f(); // undefined