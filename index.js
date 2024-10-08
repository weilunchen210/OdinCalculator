const displayScreen = document.querySelector(".display")

var firstNum = ""
var secondNum = ""
var answer = ""
var operation = ""


function add(number1,number2){
    firstNum = displayScreen.value;
    operation = "+";
    displayScreen.value = "";
}

function subtract(number1,number2){
    firstNum = displayScreen.value;
    operation = "-";
    displayScreen.value = "";
}

function multiply(number1,number2){
    firstNum = displayScreen.value;
    operation = "*";
    displayScreen.value = "";
}

function divide(number1,number2){
    firstNum = displayScreen.value;
    operation = "/";
    displayScreen.value = "";
}

function calculate(){
    if(firstNum!= ""){
        secondNum = displayScreen.value
        switch(operation){
            case "+":
                answer = eval(firstNum + operation + secondNum)
                displayScreen.value = answer
                firstNum = answer
                operation = "";
                break
            case "-":
                answer = eval(firstNum + operation + secondNum)
                displayScreen.value = answer
                firstNum = answer
                operation = "";
                break
            case "*":
                answer = eval(firstNum + operation + secondNum)
                displayScreen.value = answer
                firstNum = answer
                operation = "";
                break
            case "/":
                answer = eval(firstNum + operation + secondNum)
                displayScreen.value = answer
                firstNum = answer
                operation = "";
                break
        }
    }
    else{
        alert("")
    }
}

function clearDisplay(){
    displayScreen.value = "";
}

function display(element){
    var num = element.value
    displayScreen.value += num;
}

function printfirstnum(){
    console.log(firstNum)
}