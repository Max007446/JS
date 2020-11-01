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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    case "+":
        return addMath(arg1, arg2);
        break;
    case "-":
        return razMath(arg1, arg2);
        break;
    case "*":
        return proizvMath(arg1, arg2);
        break;
    case "/":
        return delenyeMath(arg1, arg2);
        break;
    }
}
let a = parseInt(prompt("Введите аргумент1"));
let b = parseInt(prompt("Введите аргумент2"));
let op = prompt("Введите операцию (+,-,*,/)");
let x = mathOperation(a, b, op);
alert(x);