import java.util.Scanner;

public class A10_Perimeter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Perimeter Calculator");
        System.out.print("Please enter A side in cm: ");
        double A = input.nextDouble();
        System.out.print("Please enter B side in cm: ");
        double B = input.nextDouble();
        System.out.print("Please enter C Side in cm: ");
        double C = input.nextDouble();
        System.out.print("Please enter D Side in cm: ");
        double D = input.nextDouble();



        double perimeter = A + B + C + D;
        System.out.println("Perimeter of your rectangle is: " + perimeter + "CM");
    }
}
