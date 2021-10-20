function pluse() {
    let num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = Calculator.sum(num1, num2);
    document.getElementById('out').innerHTML = result;
}

function subtraction() {
    let num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = Calculator.sub(num1, num2);
    document.getElementById('out').innerHTML = result;
}

function multiplication() {
    let num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)


    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = Calculator.mult(num1, num2);
    document.getElementById('out').innerHTML = result;
}

function division() {
    let num1, num2, result;

    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1)


    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = Calculator.div(num1, num2);
    document.getElementById('out').innerHTML = result;
}

class Calculator {
    static sum(num1, num2) {
        return num1 + num2
    }
    static sub(num1, num2) {
        return num1 - num2
    }
    static mult(num1, num2) {
        return num1 * num2
    }
    static div(num1, num2) {
        if (num2 == 0) {
            alert(" На ноль делить нельзя!")
            return 0;
        } else {
            return num1 / num2
        }
    }
}