
function BinarySearch(){
    let s=0;
    let i,flag=0,e,m;
    let a=[20,59,67,89,35,67,89];
    e=a.length-1;
    let search1=document.getElementById("p1").value;
    
    for(i=0;i<a.length;i++){
        m=parseInt((s+e)/2);
        if(search1==a[m]){
            flag=1;
             break;
        }
        else if(search1>a[m]){
    
            s=m+1;
    
        }
        else{
            e=m-1;
        }
    }
    if(flag==1){
        document.getElementById("p2").innerHTML="found";
    }
    else{
        document.getElementById("p2").innerHTml="not found";
    }
    }
    