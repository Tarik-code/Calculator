//DOM Elements
    //numbers
const zero = document.getElementById('0')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three =document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const dot = document.getElementById('.')
    //Results buttons
const divide = document.getElementById('/')
const multiply = document.getElementById('x')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const equals = document.getElementById('=')
    //other buttons
const clear = document.getElementById('clear') 
const deleteCalc = document.getElementById('delete') 
const screen = document.getElementById('screenMain')

//Variables
let numberOne = []
let numSaved = []
let results = 0;
let operatorChosen = 'reset'
let checker = 'reset';

//Numbers Event 
    //zero
zero.addEventListener('click', function() {
    numberOne.push(0)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()

})
    //one
one.addEventListener('click', function() {
    numberOne.push(1)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()

})
    //two
two.addEventListener('click', function() {
    numberOne.push(2)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()

})
    //three
three.addEventListener('click', function() {
    numberOne.push(3)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()

})
    //four
four.addEventListener('click', function() {
    numberOne.push(4)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
})
    //five
five.addEventListener('click', function() {
    numberOne.push(5)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
})
    //six
six.addEventListener('click', function() {
    numberOne.push(6)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
})
    //seven
seven.addEventListener('click', function() {
    numberOne.push(7)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()

})
    //eight
eight.addEventListener('click', function() {
    numberOne.push(8)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
})
    //nine
nine.addEventListener('click', function() {
    numberOne.push(9)
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
})
    //dot
dot.addEventListener('click', function() {
    numberOne.push('.')
    screen.textContent = `${numberOne.join('')}`
    numOprCheck()
    console.log(numSaved)
    console.log(numberOne)
})
//Operator selection checker
const checkOperator =() => {
    if (operatorChosen != 'empty' && checker != 'triggered'){
    numSaved = numberOne.join('')
    numberOne = []
    console.log(numSaved)
    console.log(numberOne)
    }}

const evaluate = () => {
     if (operatorChosen === 'plus' && checker === 'triggered'){
        addFunc()
        numSaved = results
        numberOne = []
        screen.textContent = `${numSaved} +`
        operatorChosen = 'reset'
    } else if (operatorChosen === 'minus' && checker === 'triggered'){
        minusFunc()
        numSaved = results
        numberOne = []
        screen.textContent = `${numSaved} -`
        operatorChosen = 'reset'
    } else if (operatorChosen === 'multiply' && checker === 'triggered'){
        multiplyFunc()
        numSaved = results
        numberOne = []
        screen.textContent = `${numSaved} -`
        operatorChosen = 'reset'
    } else if (operatorChosen === 'divide' && checker === 'triggered'){
        divideFunc()
        numSaved = results
        numberOne = []
        screen.textContent = `${numSaved} -`
}}

const numOprCheck = () => {
    if(operatorChosen === 'plus'){
        screen.textContent = `${numSaved} + ${numberOne.join('')}`
    } else if (operatorChosen === 'minus') {
        screen.textContent = `${numSaved} - ${numberOne.join('')}`
    } else if (operatorChosen === 'multiply') {
        screen.textContent = `${numSaved} x ${numberOne.join('')}`
    } else if (operatorChosen === 'divide') {
        screen.textContent = `${numSaved} / ${numberOne.join('')}`    
    } else if (operatorChosen === 'reset'){
        screen.textContent = `${numberOne.join('')}` 
    }
}


//Operators Events
    //addition
plus.addEventListener('click', function() {
    evaluate()
    operatorChosen = 'plus'
    checkOperator()
    screen.textContent = `${numSaved} +`
    checker = 'triggered'
})
    //Minus
minus.addEventListener('click', function() {
    evaluate()
    operatorChosen = 'minus'
    checkOperator()
    screen.textContent = `${numSaved} -`
    checker = 'triggered'
})
    //Multiplication
multiply.addEventListener('click', function(){
    evaluate()
    operatorChosen = 'multiply'
    checkOperator()
    screen.textContent = `${numSaved} x`
    checker = 'triggered'
})
    //divide
divide.addEventListener('click', function(){
    evaluate()
    operatorChosen = 'divide'
    checkOperator()
    screen.textContent = `${numSaved} /`
    checker = 'triggered'
})
    //Equals
equals.addEventListener('click', function(){
    evaluate()
    screen.textContent = `${numSaved}`
    operatorChosen = 'reset'
})
    //Clear
clear.addEventListener('click', function(){
    numberOne = []
    numSaved = []
    operatorChosen = 0
    screen.textContent = `0`
    checker = 'reset'
})
deleteCalc.addEventListener('click', function(){
    numberOne.pop()
    console.log(numberOne)
    numOprCheck()
})

//Operator Functions
    //addition
  const addFunc = () => {
    numberOne = numberOne.join('')
    results = parseFloat(numSaved) + parseFloat(numberOne)
    screen.textContent = `${results}`
}
    //minus
const minusFunc = () => {
    numberOne = numberOne.join('')
    results = parseFloat(numSaved) - parseFloat(numberOne)
    screen.textContent = `${results}`
}
    //multiplyFunc
const multiplyFunc = () => {
    numberOne = numberOne.join('')
    results = parseFloat(numSaved) * parseFloat(numberOne)
    screen.textContent = `${results}`
}
    //divideFunc
const divideFunc = () => {
    numberOne = numberOne.join('')
    results = parseFloat(numSaved) / parseFloat(numberOne)
    screen.textContent = `${results}`
}

