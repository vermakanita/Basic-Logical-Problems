package numbers;

// public class series {
//     public static void main(String[] args) {
    //     int p = 1;
    //     int n=5;
    //     for(int i=1;i<=4;i++){
    //         for(int j=1;j<=n;j++) {
    //             System.out.print(p+"     ");
    //             p++;
    //         }
    //         System.out.println();
    //     }
    // }package numbers;

public class series {
    public static void main(String[] args) {
        int n = 5;
        int p = 1;
        for (int i = 1; i <= 3; i++) {
            if (i % 2 != 0) {
                for (int j = 1; j <= n; j++) {
                    System.out.print(p + " ");
                    p++;
                }
            } else {
                int temp = p + n - 1;
                for (int j = 1; j <= n; j++) {
                    System.out.print(temp + " ");
                    temp--;
                    p++;
                }
            }
            System.out.println();
        }
    }
}


    

