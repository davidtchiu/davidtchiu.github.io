import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

/**
 * Evil Hangman game engine.
 *
 * @author [your name]
 * @version [date]
 */
public class EvilHangman implements HangmanInterface {
    // TODO - instance variables
    
    
    /**
     * Constructs a new evil hangman game. It calls initDictionary() to initialize the data
     * structure(s) to store the words from the file. Reject (throw an exception) if the 
     * the given wordLen is invalid (e.g., is negative, or there are no words with that length)
     * 
     * @param dictionaryFile    The name of the file containing a list of English words
     * @param guesses   Number of guesses a user gets before they lose
     * @param wordLen   The secret word length
     * @param revealWordList    Reveal the candidate word list after each guess (for debugging)
     * @throws IllegalArgumentException if there are no words of the given wordLen
     * @throws FileNotFoundException (you don't do this explicitly; it's propagated from initDictionary(file))
     */
    public EvilHangman(String dictionaryFile, int guessesLeft, int wordLen, boolean revealWordList) throws FileNotFoundException {
        initDictionary(dictionaryFile);
        
        // TODO finish initializing the instance variables
    }

    @Override
    public void initDictionary(String dictionaryFile) throws FileNotFoundException {
        Scanner file = new Scanner(new File(dictionaryFile));
        while (file.hasNext()) {
            String word = file.next();
            // TODO - what do you want to do with each word from the file?
        }
        file.close();
    }

    /**
     * Plays the game!
     */
    public void play() {
        do {
            // TODO - output game state: what's the currently revealed family? Used letters? Guesses left?
            // TODO - make a guess and update game state
        } while (stillPlaying());

        // end game
        announceResult();
    }

    private void announceResult() {
        // TODO - Announce whether they won or lost

        // TODO - if they lost, output a random word from the current word family
        System.out.println("The secret word was: ...");
    }
    
    private boolean stillPlaying() {
        // TODO - How you know a game is still live?
        return false;
    }
    
    // TODO finish the rest!
}
