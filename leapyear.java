package _2Assignments29Q;

 // leap year

import java.util.Scanner;

public class leapyear
{
public static void main(String args[])
{
Scanner sc = new Scanner(System.in);
System.out.println("Enter year");
int year = sc.nextInt();
if(year%4==0){
System.out.println("leap year");

}
else{
System.out.println("not a leap year");
}
}}

 