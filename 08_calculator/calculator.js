const add = function(add1, add2) {
  return add1 + add2;
	
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(arr_sum) {
  let arr_total = 0;

  for(let i = 0; i < arr_sum.length; i++ ){
    arr_total += arr_sum[i];
  }
  return arr_total;
};

const multiply = function(arr_multiply) {
  let product = 1;

  for(let i = 0; i < arr_multiply.length; i++){
    product *= arr_multiply[i];
  }
  return product;

};

const power = function(pow1, pow2) {
  
	return pow1 ** pow2;
};

const factorial = function(factor) {
	let answer = 1;

  for(let i = 2; i <= factor; i++){
    answer *= i;
  }

  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
