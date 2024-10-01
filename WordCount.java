//Word Count String

public class WordCount{
public static void main(String []args){
 
String str= "kanita ,verma, Maheshwar";
int count=0;
for(int i=0; i<str.length();i++){
char ch = str.charAt(i);
if(ch== ' '){
count++;
}}
System.out.println(count+1);
}}
