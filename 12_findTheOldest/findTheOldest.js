const findTheOldest = function(people) {
    let oldestPerson = people[0];
    let currentYear = new Date().getFullYear();

    for(let i = 1; i < people.length; i++){
        let person = people[i];

        let personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let oldestPersonAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth
        
        if(personAge > oldestPersonAge){
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
