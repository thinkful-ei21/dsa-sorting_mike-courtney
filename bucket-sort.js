'use strict';

const array = [3,1,17,5,23];

function bucketSort(array) {
  let bucket = [], 
    temp = 0,
    tempIndex = 0,
    remaining = [...array];

  for (let i=0; i<array.length; i++) {
    for (let j=0; j<remaining.length; j++) {

      if (j === 0) {
        temp =remaining[j];
        tempIndex = j;
      }

      if (temp > remaining[j]) {
        temp = remaining[j];
        tempIndex = j;
      }

    }
    bucket.push(temp);
    // set remaining to a new array which is the values proceeding in the array up to the temp index and values post index
    // then concatonate values into new array 
    remaining = [...remaining.slice(0, tempIndex), ...remaining.slice(tempIndex + 1)];
  }
  return bucket;
}

console.log(bucketSort(array));
