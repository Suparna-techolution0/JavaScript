console.log("String palindrome");
let s1 = "madam";
let s2 = "";
const len = s1.length;
for(let i = len; i>= 0; i--){
    s2 = s2 + s1.charAt(i);
}
if(s1==s2){
    console.log("The string is palindrome")
}
else{
    console.log("The string is not palindrome")
}
// output: String palindrome
//The string is palindrome
