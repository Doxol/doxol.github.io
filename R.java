import java.util.Scanner;
import java.lang.Math;

public class Quick{
	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);

		int n = scanner.nextInt();
		int x;
		int digits;
		for (int i = 0; i < n; i++){
			digits = 1;
			x = scanner.nextInt();
			for (int j = 1; j < 100; j++){
				if (x < Math.pow(10, j)){
					System.out.println(digits);
					break;
				}
				digits++;
			}
		}
	}
}