 package TestProblems;

class Q1a {
    public static void main(String args[]){
        int arr[] = {1,7,4,6,9,10};
        int i=0;
        int j=5;
        for(i=0;i<6;i++){
            for(j=i+1;j<6;j++){
                 if(arr[i]>arr[j]){
                    int temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;

                 }
            }
             
        }
        for(int k=0;k<6;k++){
            System.out.print(arr[k]);
        

    }

    
}
}