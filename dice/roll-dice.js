let Dice = function(num = 2) {
  this.num = num;
}

Dice.prototype.roll = function() {
  let total = 0;
  for (let i = 0; i < this.num; i++) {
    let pips = Math.floor((Math.random() * 6) + 1);
    console.log(`Dice ${i+1}: ${pips}`);
    total += pips;
  }
  console.log("Total :", total);
}

let commandLine = process.argv;
let dice = new Dice();

if (commandLine.length === 3) {
  dice = new Dice(commandLine[2]);
}

dice.roll();
