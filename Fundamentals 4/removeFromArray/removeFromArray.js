const removeFromArray = function(firstArray, ...toRemove) {
    let modifiedArray = [...firstArray];
    for (var i = 0; i < firstArray.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }    
    }
    return modifiedArray;

}
var x = removeFromArray([1, 2, 3, 4], 7, 2);
var y = removeFromArray([1, 2, 3, 4], 3, 2);
var z = removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);

console.log('x', x);
console.log('y', y);
console.log('z', z); 
 
module.exports = removeFromArray
