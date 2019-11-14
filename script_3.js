step = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
blank = " "
full = "#"

function pyr(step) {
  for(var index = 1; index <= step; index++ ) {
    console.log(`${blank.repeat(step-index)}${full.repeat(index)}`);
  }
}

pyr(step)