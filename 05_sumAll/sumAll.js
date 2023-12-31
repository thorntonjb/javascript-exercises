const sumAll = function(first, second) {
    if (first < 0 || second < 0)
        return "ERROR";
    if (!(typeof first === 'number') || !(typeof second === 'number'))
        return "ERROR";

    let arrayLength = Math.abs(second - first) + 1;
    let array = [arrayLength];
    let firstElement;

    if (first < second)
        firstElement = first;
    if (second < first)
        firstElement = second;

    let sum = 0;

    for(let i = 0; i < arrayLength; i++)
        {
            array[i] = firstElement;
            firstElement++;
        }

    array.forEach(element => {
        sum += element;
    });

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
