// The function display has the access to the variable i, which is called as closure

let f = () => {
    var i = 4;
    const display = () => {
        console.log(i);
    }
    return display;
}

var a = f();
a();