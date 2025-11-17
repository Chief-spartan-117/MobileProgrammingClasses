let number1 = 1;
let number2 = 2;

document.write(
  "Add ",
  number1,
  " + ",
  number2,
  " = ",
  number1 + number2,
  "<br>"
);
document.write(
  "Substract ",
  number1,
  " + ",
  number2,
  " = ",
  number1 - number2,
  "<br>"
);
document.write(
  "Multiple ",
  number1,
  " + ",
  number2,
  " = ",
  number1 * number2,
  "<br>"
);
document.write(
  "Division ",
  number1,
  " + ",
  number2,
  " = ",
  number1 / number2,
  "<br>"
);

// Conditional statement

if (number1 > number2) {
  document.write("<br>", number1 + " is greater than " + number2);
} else {
  document.write("<br>", number2 + " is greater than " + number1);
}
