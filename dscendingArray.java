//Ascending Array 


public class dscendingArray
{
public static void main(String []args)
{
int arr[] = {9,3,9,6,8};
for(int i=0; i<arr.length;i++){
for(int j=i+1;j<arr.length;j++)
{
    if(arr[i]<arr[j]) {
      int tem= arr[i];
      arr[i]=arr[j];
      arr[j]=tem;
}}
}
for(int i=0;i<arr.length;i++){

System.out.print(arr[i]+" ");
}}}

