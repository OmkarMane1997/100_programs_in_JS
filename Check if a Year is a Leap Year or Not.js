function checkLeapYear(params) {
    if (params %400 ==0) {
        console.log("This is the Leap Year",params);
    }else if (params % 4== 0 && params % 100 !=0) {
        console.log("This is the Leap Year",params);
    }else{
        console.log("This is the not leap Year",params);
    }
}

checkLeapYear(2024);
