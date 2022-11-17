console.log("prime numbers from 1 to 100 are: ");
let i,j;
for(i = 2; i<=100 ; i++){
    let no = i;
    let isprime= true;
for(j = 2; j< no; j++){
if(no%j==0)
{
    isprime= false;
    break;
}
}
if(isprime==true)
console.log(no);
}
// output: prime numbers from 1 to 100 are: 
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97

