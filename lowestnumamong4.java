package _2Assignments29Q;

 // lowest number among 4 different 

import java.util.Scanner;

public class lowestnumamong4{
public static void main(String []args)
{
   Scanner sc = new Scanner(System.in);
   System.out.println("Enter a ,b, c, d");
    int a = sc.nextInt();
    int b = sc.nextInt();
    int c = sc.nextInt();
    int d = sc.nextInt();
    if(a>b&&a>c&&a>d){
  System.out.println("a is greater");


}
  

else if(b>a&&b>c&&b>d){
  System.out.println("b is greater");


}

else if(c>a&&c>b&&c>d){
  System.out.println("c is greater");


}

else {
  System.out.println("d is greater");


}
}}
  
    
    
 
