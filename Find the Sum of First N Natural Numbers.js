// Method 1: Iterative way (Using for loop)
// Method 2: Iterative way (Using while loop)
// Method 3: Direct Formula
// Method 4: Recursive Approach

//METHOD 1: Iterative way (Using for loop

function sumOf(params) {
    let sum =0;
    debugger;
    for (let i = 0; i <= params; i++) {
        sum += i;
    }
return sum;
}
console.log('Method 1',sumOf(5));

console.log("method 2");
const sumOfM2=(n)=>{
    let i =0;
    let sum =0;
    while (i<=n) {
        sum+=i;
        i++;
    }

    return sum;  
}
console.log("Method 2",sumOfM2(6));

console.log("Method 3 :direct method");
function sumOfM3(n) {
    let sum =0;
    return sum= n*(n+1)/2;
}
console.log("Method 3",sumOfM3(6));