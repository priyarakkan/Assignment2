let coinFlip = Math.round(Math.random());

    // Ask user for choice
    let choice = prompt("Heads or Tails?").toLowerCase(); // normalize input

    // Heads case
    if (coinFlip === 0) {
      // Coin is Heads
      if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
      } else {
        alert("The flip was heads but you chose tails...you lose!");
      }
    } 
    // Tails case
    else {
      if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
      } else {
        alert("The flip was tails but you chose heads...you lose!");
      }
    }
