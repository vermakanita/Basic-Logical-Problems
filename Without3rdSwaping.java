package _2Assignments29Q;
import java.util.Scanner;

public class Without3rdSwaping {
    public static void main(String args[]){
        Scanner sc = new Scanner (System.in);
        System.out.println("enter a b");
        int a= sc.nextInt();
        int b= sc.nextInt();
     
     b= a+b;
     a = b-a;
    b = b-a;
    System.out.println(a+" "+b);
    }}
    