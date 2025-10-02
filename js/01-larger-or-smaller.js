let num1 = Number(prompt('Enter the first number : '));
let num2 = Number(prompt('Enter the second number :'));
document.write(`Larger or Smaller <br>`);
if(num1>num2) {
    document.write(`Large number: ${num1}` );
} else if(num1<num2) {
    document.write(`Larger number : ${num2}`);
}
else {
    document.write('Both are equal!')
}

