number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factor(number) {
  for(var index = number - 1; index >= 2; index--) {
  number *= (index);
  }
  return number;
}

console.log(factor(number))