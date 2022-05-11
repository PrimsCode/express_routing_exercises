//turn num string into num array
function stringToArray(numsString) {
    let numsArr = [];

    for (let i=0; i < numsString.length; i++){
        let currNum = Number(numsString[i]);
        if (Number.isNaN(currNum)){
            return new Error(`The value ${numsString[i]} is not a valid number.`)
        }
        numsArr.push(currNum);
    }
    return numsArr;
}

//find mean of num array
function findMean(numsArr){
    if (numsArr == 0) return 0;

    let sum = 0;
    for (let i = 0; i < numsArr.length; i++){
        sum += numsArr[i];
    };

    let result = sum/numsArr.length;
    return result;
}

//find median of num array
function findMedian(numsArr){
    if (numsArr == 0) return 0;

    let sortArr = numsArr.sort((a,b) => a-b);
    let midindex = Math.floor((numsArr.length) / 2);

    let median;

    if (numsArr.length % 2 === 0){
        median = (sortArr[midindex] + sortArr[midindex - 1]) / 2;
    } else {
        median = sortArr[midindex];
    }

    return median;
}

//find mode of num array
function findMode(numsArr){
    if (numsArr == 0) return 0;

    let freqCounter = createFrequencyCounter(numsArr);

    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return mostFrequent;
}

//find num that appears most frequent in num array
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }


module.exports = {
    stringToArray,
    findMean,
    findMedian,
    findMode
};