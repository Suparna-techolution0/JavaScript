function check(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }
}
let x= check(30,98,89)
console.log("The largest number is " + x);
//The largest number is 98