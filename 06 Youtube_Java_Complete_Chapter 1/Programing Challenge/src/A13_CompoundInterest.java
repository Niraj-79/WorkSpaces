import java.time.Year;
import java.util.Scanner;

public class A13_CompoundInterest {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to CompoundInterest\n");
        System.out.print("Please enter your principle amount RS: ");
        int principle = input.nextInt();
        System.out.print("Now, Tell me your rate of interest: ");
        float rate = input.nextFloat();
        System.out.print("Now, Tell me for how many years are you borrowing this money: ");
        float year = input.nextFloat();

        double comInt = principle * Math.pow((1 + rate / 100), year);
        System.out.println("Your compound interest is RS:" + comInt);
    }
}
