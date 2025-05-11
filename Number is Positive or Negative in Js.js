// Program to check whether a number is positive or negative
// check if the Number is Positive or Negative in Js.
// There are three method 
// Method 1 Using Brute Force.
// Method 2 Nested If-else statements.
// Method 3 Ternary Operators.

//Method One Brute Force
// The algorithm for the method as following
// step 1: start.
// step 2: Inset the number.
// step 3: if the number is greater than zero then print "The Number is Positive".
// step 4: if the number is smaller than zero then print "The number is Negative".
// step 5:n else print "The Number is Zero".
// step 6: stop.

function MethodOne(number) {
    if (number) {
        if (number>0) {
            console.log("The number is Positive");
        }
        else if(number<0){
            console.log("The Number is Negative.");
        }else{
            console.log("The Number is Zero.");
        }
    }else{
        console.log("Please Enter the Number");
    }
}
//
MethodOne(10);
MethodOne(-10);
MethodOne(0);