function calculate() {
  let input = document.getElementById('input').value
  console.log(input);

  let output_value = split_coins(input)
  console.log(output_value);
  
  populateHTML(output_value)  
}

function split_coins(){
  let number = document.getElementById('input').value

  let cents = number * 100;

  let quarter = Math.floor(cents / 25);
  let balance = cents % 25;
  let dime = Math.floor(balance / 10);
  balance = balance % 10;
  let nickel = Math.floor(balance / 5);
  balance = balance % 5;
  let penny = Math.floor(balance / 1);

  return {cents, quarter, dime, nickel, penny}
}

function populateHTML(output) {
  document.getElementById('cents_value').innerHTML = output.cents;
  document.getElementById('quarters_value').innerHTML = output.quarter;
  document.getElementById('dimes_value').innerHTML = output.dime;
  document.getElementById('nickels_value').innerHTML = output.nickel;
  document.getElementById('pennies_value').innerHTML = output.penny;
}