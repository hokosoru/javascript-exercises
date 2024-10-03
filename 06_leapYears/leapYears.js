const leapYears = function(year) {

    const century = year % 100 == 0;
    const yearDivideby400 = year % 400 == 0;
    if(year % 4 == 0 && ( !century || yearDivideby400 )){
        return true;
    }else{
        return false;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
};

// Do not edit below this line
module.exports = leapYears;
