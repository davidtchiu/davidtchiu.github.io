/**
 * This class models one of the 4 buttons in Simone. A button
 * is associated with an elementID in the HTML doc, a sound,
 * a color, and a highlighted color.
 *
 * @author David
 * @version 3/16/2021
 */
class SimoneButton {
  /**
   * Constructs a new button for Simone
   * @param {string} elementID    id of HTML element of the button (must include leading '#')
   * @param {string} soundPath    path to file
   * @param {string} colorClass   name of CSS color class
   * @param {string} hlColorClass     name of CSS color class when button is pressed
   */
  constructor(elementID, soundPath, colorClass, hlColorClass) {
    this.node = document.querySelector(elementID); /** DOM node for button */
    this.sound = soundPath; /** path to sound file (should be .wav or .mp3) */
    this.colorClass = colorClass; /** color CSS class*/
    this.highlightedClass = hlColorClass; /** highlighted CSS class */
  }

  /**
   * Play the sound
   */
  playSound() {
    new Audio(this.sound).play();
  }

  /**
   * Show light-up version of button
   */
  lightUp() {
    this.node.className = this.highlightedClass;
  }

  /**
   * Show normal version of button
   */
  lightDown() {
    this.node.className = this.colorClass;
  }

  /**
   * @returns the DOM node for this button
   */
  getNode() {
    return this.node;
  }

  /**
   *
   * @returns the color of this button
   */
  getColor() {
    return this.colorClass;
  }
}
