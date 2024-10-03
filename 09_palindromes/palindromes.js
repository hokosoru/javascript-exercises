const palindromes = function (palindrome) {
    let lowerCase = palindrome.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let reverse = lowerCase
    .split("")
    .reverse()
    .join("");

    if(reverse == lowerCase){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
