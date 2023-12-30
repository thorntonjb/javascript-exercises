const removeFromArray = function(array, ...rest) {
    let newArray = [];  
    
    array.forEach(element => {
        if (!rest.includes(element)) {
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
