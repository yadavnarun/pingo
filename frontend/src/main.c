# include<stdio.h>
int fac(int n){
    int pro=0;
    if(n==0)
    return (n+1);
    else
    return n*fac(n-1);
}
int main(){
    int n,i,t,f=0;
    printf("Enter the test cases\n");
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        printf("Enter the no:\n");
        scanf("%d",&n);
        f=fac(n);
    printf("The Fac is of %d is %d\n",n,f);
    }
    return 0;
}