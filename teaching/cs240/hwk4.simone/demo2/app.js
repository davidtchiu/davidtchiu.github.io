/* Main */
let play = document.querySelector("#play");
play.addEventListener("click", () => {
  let simoneButtons = {};
  simoneButtons["R"] = new SimoneButton(
    "#redSq",
    "sounds/red.wav",
    "red",
    "lightred"
  );
  simoneButtons["B"] = new SimoneButton(
    "#blueSq",
    "sounds/blue.wav",
    "blue",
    "lightblue"
  );
  simoneButtons["G"] = new SimoneButton(
    "#greenSq",
    "sounds/green.wav",
    "green",
    "lightgreen"
  );
  simoneButtons["Y"] = new SimoneButton(
    "#yellowSq",
    "sounds/yellow.wav",
    "yellow",
    "lightyellow"
  );

  // create a game
  let numRounds = parseInt(document.querySelector("#rounds").value, 10);
  if (!numRounds) {
    numRounds = 10;
  }

  const game = new SimoneGame(
    simoneButtons,
    numRounds,
    "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/"
  );
  game.play();
});
