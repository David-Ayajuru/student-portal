function calculate(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter both numbers.");
    return;
  }

  let answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;

    case "-":
      answer = num1 - num2;
      break;

    case "*":
      answer = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        result.textContent = "Cannot divide by zero";
        return;
      }
      answer = num1 / num2;
      break;

    case "%":
      answer = num1 % num2;
      break;

    default:
      answer = 0;
  }

  result.textContent = answer;
}
