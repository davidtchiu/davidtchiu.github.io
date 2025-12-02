import java.util.Scanner;
import java.io.FileNotFoundException;
/**
 * Evil Hangman driver class
 * You shouldn't have to make changes to this file 
 * (but allowed to if you wish)
 *
 * @author David
 * @version 11/7/24
 */
public class EvilHangmanDriver {
    private final static int NUM_GUESSES = 100;
    private final static String DICT_FILE = "dictionary.txt";
    private final static boolean DEBUG_MODE = true;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int wordLen = -1;
        while (true) {
            System.out.print("Enter desired word length: ");
            String line = sc.nextLine().trim();

            try {
                wordLen = Integer.parseInt(line);
                if (wordLen <= 0) {
                    System.out.println("Word length must be positive.");
                    continue;
                }
                
                // If the constructor rejects wordLen (e.g., dictionary lacks words with those size)
                // we catch that below.
                HangmanInterface game = new EvilHangman(DICT_FILE, NUM_GUESSES, wordLen, DEBUG_MODE);
                game.play();
                break;      // success, exit loop
            } catch(FileNotFoundException e) {
                System.out.println("File could not be opened: " + DICT_FILE);
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid integer.");
            } catch (IllegalArgumentException e) {
                // EvilHangman rejected the word length (e.g., no words of that size)
                System.out.println(e.getMessage());
                System.out.println("Try another length.");
            }
        }
        sc.close();
    }
}
