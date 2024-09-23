import java.util.Scanner;

public class A09_FloatMultiplication {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("We are doing Float Multiplication\n");
        System.out.print("Please enter first decimal number: ");
        double first = input.nextDouble();
        System.out.print("Now, please enter second number: ");
        double second = input.nextDouble();

        //double mul = first * second;
        //System.out.println("\nResult is: " + mul);

        System.out.println("\nMultiplication Result is: " + first * second);
        System.out.println("\nAddition Result is: " + (first + second));

    }
}
