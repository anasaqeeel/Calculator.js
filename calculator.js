var input = 0, result = 0;
var flag = false;
var operand1, operand2 = 0;
var command;
function zero() {
    if (flag) {
        var temp = "0";
        operand2 += (temp);
    }
    input += "0";
    document.getElementById('t1').value = input;
}
function one() {
    if (flag) {
        var temp = "1";
        operand2 += (temp);
    }
    input += "1";
    document.getElementById('t1').value = input;

}
function two() {
    if (flag) {
        var temp = "2";
        operand2 += (temp);
    }
    input += "2";
    document.getElementById('t1').value = input;

}
function three() {
    if (flag) {
        var temp = "3";
        operand2 += (temp);
    }
    input += "3";
    document.getElementById('t1').value = input;


}
function four() {
    if (flag) {
        var temp = "4";
        operand2 += (temp);
    }
    input += "4";
    document.getElementById('t1').value = input;

}
function five() {
    if (flag) {
        var temp = "5";
        operand2 += (temp);
    }
    input += "5";
    document.getElementById('t1').value = input;

}
function six() {
    if (flag) {
        var temp = "6";
        operand2 += (temp);
    }
    input += "6";
    document.getElementById('t1').value = input;

}
function seven() {
    if (flag) {
        var temp = "7";
        operand2 += (temp);
    }
    input += "7";
    document.getElementById('t1').value = input;

}
function eight() {
    if (flag) {
        var temp = "8";
        operand2 += (temp);
    }
    input += "8";
    document.getElementById('t1').value = input;

}
function nine() {
    if (flag) {
        var temp = "9";
        operand2 += (temp);
    }
    input += "9";
    document.getElementById('t1').value = input;
}
function plus() {
    flag = true;
    operand1 = Number(document.getElementById('t1').value);
    input += "+";
    document.getElementById('t1').value = input;
    command = "+";
}
function minus() {
    flag = true;
    operand1 = Number(document.getElementById('t1').value);
    input += "-";
    document.getElementById('t1').value = input;
    command = "-";

}
function mul() {
    flag = true;
    operand1 = Number(document.getElementById('t1').value);
    input += "*";
    document.getElementById('t1').value = input;
    command = "*";

}
function cl1() {
    input = "";
    document.getElementById('t1').value = input;
    operand1 = null; operand2 = 0; input; flag = false; command = null;
}
function div() {
    flag = true;
    operand1 = Number(document.getElementById('t1').value);
    input += "/";
    document.getElementById('t1').value = input;
    command = "/";

}
function equal() {
    operand2 = Number(operand2);
    if (command == "+") {
        result = operand1 + operand2;
    }
    else if (command == "-") {
        result = operand1 - operand2;

    }
    else if (command == "*") {
        result = operand1 * operand2;

    }
    else if (command == "/") {
        result = operand1 / operand2;

    }
    alert("result of " + operand1 + " " + command + " " + operand2 + " is: " + result);
}