
function plus(num1, num2, result) {

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1+num2;
    document.getElementById('out').innerHTML = result;
}

function minus(num1, num2, result) {

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1-num2;
    document.getElementById('out').innerHTML = result;
}

function multiply(num1, num2, result) {

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1*num2;
    document.getElementById('out').innerHTML = result;    
}

function share(num1, num2, result) {

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1/num2;
    document.getElementById('out').innerHTML = result;    
}

function stepen(num1, step, result) {
    step = document.getElementById('c1').value;
    step = parseInt(step);
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    result = num1**step;
    document.getElementById('out').innerHTML = result;    
}

function sqrt(num1) {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    document.getElementById('out').innerHTML = Math.sqrt(num1);    
}