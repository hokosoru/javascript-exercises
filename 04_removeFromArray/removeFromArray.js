const removeFromArray = function(arr1, num) {
    const array = arr1;
    const index = array.indexOf(num);
    for(let i = 0; i < array.length; i++){
        if(i == num){
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
