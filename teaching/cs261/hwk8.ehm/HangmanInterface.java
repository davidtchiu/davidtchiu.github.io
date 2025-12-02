import java.util.*;
import java.io.FileNotFoundException;

public interface HangmanInterface {
    /** constants */
    char BLANK = '_';
    
    /**
     * Reads in all the words from the English dictionary.
     * 
     * @param dictionaryFile The dictionary's file name.
     */
    void initDictionary(String dictionaryFile) throws FileNotFoundException;

    /**
     * Starts the game. The method will first print the game state,
     * which includes the current guessed letters, used letters, 
     * and guesses remaining. This printout is followed by a prompt
     * that scans in the user's guess. Their guess is "processed"
     * and the above sequence repeats until they run out of guesses
     * or if they guessed the word correctly.
     */
    void play();
    
    /**
     * Prompts the user for a single letter, and scans in their input.
     * May need to reprompt if the letter has already been guessed in 
     * the past.
     * 
     * @return the letter that was entered.
     */
    char makeGuess();
    
    /**
     * Builds a map of word-family => list-of-words mappings given the guess.
     * The map should be built from just the current possible list of words.
     * 
     * Suppose the revealed word family is "A___Y" and the current list of words associated
     * with that family contains [ABBEY, AREFY, ALLEY, ALLOY, ANNOY]. Say the guessed 
     * letter was 'E'. Then you would build and return this map containing these families:
     * "A___Y" -> [ALLOY, ANNOY]
     * "A__EY" -> [ABBEY, ALLEY]
     * "A_E_Y" -> [AREFY]
     * 
     * @param wordList The current list of candidate words
     * @param guess The newly guessed letter
     */
    HashMap<String, List<String>> buildWordFamilies(char guess);    
    
    /**
     * Updates the internal word-family map after the newly guessed
     * letter has been applied. This method then determines the word
     * family that maps to the largest list of words, and returns it.
     * 
     * @param guess a letter that was guessed
     * @return the next word family
     */
    String nextWordFamily(char guess);    
}
