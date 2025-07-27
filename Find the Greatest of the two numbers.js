// Method 1 : Using if – else Statements
// Method 2 : Using Ternary Operator
console.log("Method 2");

function method1(one ,two){
if (one ==two) {
    console.log('both are same',one,two);
}else if (one > two) {
    console.log(one,'is greeter than',two);
    
}
else{
    console.log(two,'is greeter than',one);

}

}
console.log(method1(1,2));

function method2(num1, num2) {
    if (num1==num2) {
        console.log("both are same");
    }
    let res = num1>num2?console.log("num one is Greater"):console.log('num 2 Greater');

}
console.log(method2(1,2));

