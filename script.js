let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  }else{
    currentNumber += number;
  }
};

const calculatorScreen = document.querySelectorAll('.calculator-screen');

const updateScreen = (number) =>{
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
  number.addEventListener("click", (event)=>{
    // console.log("number is presed");
    console.log(event.target.value);
    updateScreen(currentNumber);

  });
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
}
// click event ke operator
const operators =  document.querySelectorAll(".operator");

operators.forEach((operator)=>{
  operator.addEventListener("click", (event)=>{
    inputOperator(event.target.value);
  });
});


const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case "+":
      result =  parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result =  parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result =  parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result =  parseFloat(prevNumber) / parseFloat(currentNumber);
      break;

    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click'), () =>{
  calculate()
  updateScreen(currentNumber);
  // console.log('equal button is pressed');
}


const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '';
};

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});
inputDecimal = (dot) => {

  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', () =>{
  console.log(event.target.value);
  updateScreen(currentNumber);
});
