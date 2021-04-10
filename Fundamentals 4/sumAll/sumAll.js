const sumAll = function(int1, int2) {
    let array=[int1, int2];

    let list =array.sort();
    let smallestInt = list[0];
    let largestInt =  list[1];
    let sum =(largestInt -smallestInt+1)*(smallestInt +largestInt)/2;
    return sum;
    if (smallestInt<0 || largestInt<0 || isNaN){
        return 'ERROR';
    }


    }

module.exports = sumAll
