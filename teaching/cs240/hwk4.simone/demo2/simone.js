const DELAY = 400;
const START_SEQ_LEN = 12;

class SimoneGame {
  /**
   * Initializes a new Simone game. Adds listeners
   * @param {Object} object containing the 4 buttons, identified by "Y", "G", "B", "R"
   * @param {number} length Number of rounds
   */
  constructor(buttons, length, apiURL) {
    this.api = apiURL;
    this.patternLen = length;
    this.buttons = buttons;
    this.user = []; // what the user has entered this round
    this.solution = []; // solution pattern
    this.currentIdx = 0; // points to which element the user just entered
    this.currentRound = 1; // points to current location of the pattern's end

    // attach all simone's buttons to events
    // for (let button of Object.values(this.buttons)) {
    for (let color of Object.keys(this.buttons)) {
      let button = this.buttons[color];
      let node = button.getNode();

      // mouse clicked down on a button - light up
      node.addEventListener("mousedown", () => {
        button.lightUp();
      });

      // mouse clicker up
      node.addEventListener("mouseup", () => {
        button.lightDown();
        button.playSound();
        this.user.push(color);
        this.checkGameStatus();
      });

      // mouse went off square - reset
      node.addEventListener("mouseout", () => {
        button.lightDown();
      });

      // mouse hovering over a button - light up border
      node.addEventListener("mouseover", () => {
        node.classList.add("hover");
      });
    }
  }

  /**
   * Starts a game. The starting sequence is played followed
   * by the start of round 1.
   */
  async play() {
    // get game-start sequence from Simone API
    try {
      const gameStart = await axios.get(this.api + `?cmd=start`);
      const startSequence = gameStart.data.sequence;
      this.playSequence(startSequence, 0, START_SEQ_LEN, DELAY * 0.3);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }

    // get solution key sequence from Simone API
    try {
      const result = await axios.get(
        this.api + `?cmd=getSolution&rounds=${this.patternLen}`
      );
      this.solution = result.data.key;
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }

    await new Promise((r) => setTimeout(r, 4000));
    this.playSequence(this.solution, 0, this.currentRound, DELAY);
  }

  /**
   *
   * @param {array} sequence
   * @param {number} start
   * @param {number} end
   * @param {number} delay
   */
  async playSequence(sequence, start, end, delay) {
    await new Promise((r) => setTimeout(r, delay));
    for (let i = start; i < end; i++) {
      await new Promise((r) => setTimeout(r, delay));
      let button = this.buttons[sequence[i]];
      button.lightUp();
      button.playSound();
      await new Promise((r) => setTimeout(r, delay));
      button.lightDown();
    }
  }

  async checkGameStatus() {
    let gameStatusNode = document.querySelector("#status");

    // game is already over?
    if (
      this.currentIdx >= this.currentRound ||
      this.currentRound > this.patternLen
    ) {
      gameStatusNode.innerHTML = "Game over!";
    } else {
      // got it wrong!
      if (!this.checkCorrectness()) {
        // change background color and text
        document.querySelector("body").style.backgroundColor = "hotpink";
        gameStatusNode.innerHTML = "Incorrect! You lose!";

        // taunt sound
        new Audio("sounds/wrong.wav").play();
        await new Promise((r) => setTimeout(r, DELAY));
        new Audio("sounds/lose.wav").play();

        // force game over
        this.currentIdx = this.currentRound;
      }
      // got it right!
      else {
        // Move index along
        this.currentIdx++;

        // Go to next round!
        if (
          this.currentIdx == this.currentRound &&
          this.currentRound < this.patternLen
        ) {
          new Audio("sounds/nextRound.wav").play();
          this.user = [];
          this.currentIdx = 0;
          this.currentRound++;
          gameStatusNode.innerHTML = "Good job! Prepare for next round.";
          await new Promise((r) => setTimeout(r, DELAY * 2));
          gameStatusNode.innerHTML = `Round ${this.currentRound} of ${this.patternLen}`;
          await new Promise((r) => setTimeout(r, DELAY * 2));

          // show next pattern
          this.playSequence(this.solution, 0, this.currentRound, DELAY);
        }
        // Haven't reached the next round
        else if (this.currentIdx < this.currentRound) {
          gameStatusNode.innerHTML = `So far so good! ${
            this.currentRound - this.currentIdx
          } more to go!`;
        }
        // got it right. Winner!
        else if (this.currentRound == this.patternLen) {
          // change color
          document.querySelector("body").style.backgroundColor = "DeepSkyBlue";

          // play heroic music
          new Audio("sounds/win.mp3").play();

          // congratulate
          gameStatusNode.innerHTML = `Yay you win!`;
        }
      }
    }
  }

  /**
   *
   * @returns true if current values in user input and solution are equal
   */
  checkCorrectness() {
    return this.user[this.currentIdx] == this.solution[this.currentIdx];
  }
}
