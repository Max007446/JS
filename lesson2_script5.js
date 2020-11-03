function addMath(arg1, arg2) {
    let x = arg1 + arg2;
    return x;
}

function razMath(arg1, arg2) {
    let x = arg1 - arg2;
    return x;
}

function proizvMath(arg1, arg2) {
    let x = arg1 * arg2;
    return x;
}

function delenyeMath(arg1, arg2) {
    let x = arg1 / arg2;
    return x;
}
let sum = addMath(5, 6);
let raz = razMath(5, 6);
let proizv = proizvMath(5, 6);
let delenye = delenyeMath(5, 6);
alert(sum);
alert(raz);
alert(proizv);
alert(delenye);