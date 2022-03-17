let t = 1;
const incMs = () => {
    t = t + 1;
    console.log(t);
}
const a = setInterval(incMs, 1);
const clearTime = () => {
    clearInterval(a);
}
const b = setTimeout(clearTime, 5000);
