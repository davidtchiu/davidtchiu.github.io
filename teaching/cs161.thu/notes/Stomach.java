import java.util.Random;

/**
 * A primitive stomach class
 *
 * @author David
 * @version 2/7/19
 */
public class Stomach {
    private int ingested;   //how much food in the stomach
    private int digested;   //how much food digested

    /**
     * Creates a default, empty stomach.
     */
    public Stomach() {
        ingested = 0;
        digested = 0;
    }

    /**
     * Creates a stomach with some food in it!
     * @param startAmount The amount of food already in stomach
     */
    public Stomach(int startAmount) {
        ingested = startAmount;
        digested = 0;
    }

    /**
     * Ingests the specified amount of food.
     * @param amount    some amount of food to ingest
     */
    public void ingest(int amount) {
        if (amount > 0) {
            ingested += amount;
        }
        else {
            System.out.println("Error: can't ingest negative food units: " + amount);
        }
    }

    /**
     * Digests a random amount of food that's currently
     * in the stomach.
     */
    public void digest() {
        //get a random amount of food to digest
        Random rng = new Random();
        int amountToDigest = rng.nextInt(ingested+1);

        //accumulate amount digested
        digested += amountToDigest;

        //remove that amount from the stomach
        ingested -= amountToDigest;
    }

    /**
     * @return the amount of food ingested
     */
    public int getAmountFood() {
        return ingested;
    }

    /**
     * @return the amount of food digsted
     */
    public int getAmountDigested() {
        return digested;
    }

    /**
     * @return a string that summarizes the current state of the stomach
     */
    public String toString() {
        return"Ingested: " + ingested + ", " + " digested: " + digested;
    }
}
