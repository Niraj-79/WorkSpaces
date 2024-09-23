import java.util.Scanner;

public class A15_PositiveNegativeZero {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Number Checker");
        System.out.print("Please enter your number: ");
        int num = input.nextInt();

        if (num > 0) {
            System.out.println("Your number is positive");
        } else if (num == 0) {
            System.out.println("Your number is zero");
        } else {
            System.out.println("Your number is negative");
        }
    }
}
