let findTheOldest = function(people) {
  const oldest = people.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return oldest[0];
 }
 


module.exports = findTheOldest

