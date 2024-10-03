const fibonacci = function(fib) {
    let num = parseInt(fib);
    let n1 = 0
        ,n2 = 1;
    let result;

    if(num === 0) return 0;
    if(num === 1) return 1;
    if(num < 0) return "OOPS";

    for(let i = 2; i <= num; i++){
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    
    return result;
};  

// Do not edit below this line
module.exports = fibonacci;
