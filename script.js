function Num(number) {
    document.getElementById("text").value += number

}

function Ans() {

    let x = document.getElementById("text").value
    if (x == "") {
        x = "";
    } else {

        let y = eval(x)
        document.getElementById("text").value = y

    }
}

function clr() {
    document.getElementById("text").value = " "

}

function removeCharacter() {
    let str = document.getElementById('text').value;
    // console.log('>>>>> backspace', str);
    let newString = str.slice(0, str.length - 1)
    // console.log('new str', newString, str);
    document.getElementById('text').value = newString
}

const operators = ['+', '*', '-', '/', '%']

function checkOperator(char) {
    return operators.includes(char)
}

function handleOperators(symbol) {
    let userInput = document.getElementById('text').value;
    let lastCharacter = userInput.charAt(userInput.length - 1)
    let isIncluded = checkOperator(lastCharacter);
    if (isIncluded) {
        let newStr = userInput.replace(/.$/, symbol)
        document.getElementById('text').value = newStr
    } else {
        document.getElementById('text').value = userInput + symbol
    }
}

// function handleOperators(symbol) {

//     let check = document.getElementById('text').value
//     let lastcharecter = check.charAt(check.length - 1)
//     let isInclude = checkoperators(lastcharecter)
//     if (isInclude) {
//         let str = check.replace(lastcharecter, symbol)
//         document.getElementById('text').value = str
//     }
//     else {
//         document.getElementById('text').value = check + symbol
//     }
// }