package _2Assignments29Q;

 // week days print

import java.util.Scanner;

public class weekdays{
public static void main(String []args){
Scanner sc = new Scanner(System.in);
System.out.println("enter day number");
int day= sc.nextInt();
switch (day){
case 1: System.out.println("monday");
break;

case 2: System.out.println("Tuesday ");
break;
case 3: System.out.println("wendsday");
break;
case 4: System.out.println("Thursday ");
break;
case 5: System.out.println("friday ");
break;
case 6: System.out.println("saterday");
break;
case 7: System.out.println("saterday");
break;

default: System.out.println("invalid choice");
break;
}
}}


