package _2Assignments29Q;

 //Conversion Fahrenheit to Celsius 

import java.util.Scanner;

public class FahrenheittoCelsius{
public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter f or c");
int ch = sc.nextInt();
// int c = sc.nextInt();
int f;
int c;

if(ch=='f'){
  c = (((68-32)*5)/9);
  System.out.println(c);
}
else if(ch=='c'){
f = ((20*(9/5))+32);
System.out.println(f);
}
}
