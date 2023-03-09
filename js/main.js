let sum = 0;

for (let i = 0; i < 3; i++) {
  let num = prompt(`Enter number №${i+1}:`);
  if (num === null || isNaN(parseFloat(num))) {
    alert("Invalid input.. Please enter a number");
    i--;
  } else {
    sum += parseFloat(num);
  }
}

let avg = sum / 3;
alert(`Average number: ${avg.toFixed(4)}`);
