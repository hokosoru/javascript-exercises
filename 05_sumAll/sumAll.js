const sumAll = function(num1, num2) {
    let sum = 0;
    
    if(isNaN(num1) || isNaN(num1)){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if(typeof num1 == "string" || typeof num2 == "string"){
        return "ERROR"
    }
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    if(num1 > num2){
        const temp = num1;

        num1 = num2;
        num2 = temp;
    }

    for(let i = num1; i <= num2; i++){
        sum+=i;
    }
    return sum;
    
};


// Do not edit below this line
module.exports = sumAll;
