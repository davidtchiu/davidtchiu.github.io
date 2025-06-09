public class OrcaCard
{
    /** instance vars */
    private double balance; // how much $ is on the card?
    private double taxRate; // how much % of each purchase is the tax?
    private double taxesPaid;   // how much $tax have I paid?
    private double costliest;   // most expensive trip (without tax)
    private double allTripCost; // sum of all the trips
    private int numSwipes;      // count of swipes (trips bought)
    
    /** constructors */
    public OrcaCard() {
        allTripCost = 0;
        numSwipes = 0;
        costliest = 0;
        taxesPaid = 0;
        balance = 0;        // card has no value initially
        taxRate = 0.065;    // default tax rate is 6.5%
    }
    
    public OrcaCard(double newTaxRate) {
        // test to see if newTaxRate is negative (invalid)
        // take |newTaxRate| if negative
        if (newTaxRate < 0) {
            newTaxRate = -newTaxRate;
        }
        
        allTripCost = 0;
        numSwipes = 0;
        costliest = 0;
        taxesPaid = 0;
        balance = 0;
        taxRate = newTaxRate;
    }
    
    /** methods */
    public void topUp(double amount) {
        if (amount < 0) {
            amount = -amount;
        }
        
        balance += amount;
    }
    
    public void buyTrip(double costOfTrip) {
        // calculate how much tax we owe for this trip
        double taxOwed = taxRate * costOfTrip;
        
        // can we afford the trip?
        if ((taxOwed + costOfTrip) > balance) {
            System.out.println("Insufficient balance: please top up");
        }
        else {
            // deduct from my balance the tax and the trip cost
            balance -= costOfTrip;
            balance -= taxOwed;
            taxesPaid += taxOwed;   // keep track of taxes!
            System.out.println("Success: current balance is $" + balance);

            // I need to compare current trip cost to the costliest trip
            // of all time. If more expensive, then save!
            if (costliest < costOfTrip) {
                costliest = costOfTrip;
            }
            
            // for averaging
            allTripCost += costOfTrip; // add cost to total
            numSwipes += 1; // made another swipe!
        }
    }
    
    public void printSummary() {
        System.out.println("$" + balance + " left after " + numSwipes + " trips");
        System.out.println(balanceLevel());
        System.out.println("Your costliest trip so far: $" + getCostliestTrip());
    }
    
    
    public String balanceLevel() {
        if (balance == 0) {
            return "Your card is empty! Please top up!";
        }
        else if (balance > 5 * getAverageTripCost()) {
            return "Your balance is high!";
        }
        else if (balance > 2 * getAverageTripCost()) {
            return "Your balance is sufficient!";
        }
        else if (balance >= getAverageTripCost()) {
            return "Your balance is just enough";
        }
        else {
            return "Your balance is low";
        }
    }

    
    
    public double getTax() {
        return taxesPaid;
    }
    
    public double getCostliestTrip() {
        return costliest;
    }
    
    public double getAverageTripCost() {
        return allTripCost / numSwipes;
    }
    
}