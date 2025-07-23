//Problem Statement --> https://www.hackerrank.com/challenges/plus-minus/problem

//Algorithm:
// 1. Find the array length 
// 2. Find count of positive, negative and zeros present in array
// 3. Divide count of positive numbers by array length 
// 4. Divide count of negative numbers by array length 
// 5. Divide the count of zeroes by array length 
// 6. Round the answer to 6 digits after the decimal point 

//Solution:
function plusMinus(arr) {
    
    let elementCount = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for(let i=0; i<elementCount; i++) {
      if(arr[i] > 0 ) {
        positiveCount++;
      } else if(arr[i]<0) {
        negativeCount++;
      }else {
        zeroCount++;
      }
    }
  
    let positiveRatio = (positiveCount/elementCount)
    let negativeRatio = (negativeCount/elementCount)
    let zeroRatio = (zeroCount/elementCount)
    
    console.log(parseFloat(positiveRatio.toFixed(6)))
    console.log(parseFloat(negativeRatio.toFixed(6)))
    console.log(parseFloat(zeroRatio.toFixed(6)))
  
  }

  // .toFixed() is used to round of the float to specified number of digits after decimal point
  // .toFixed() always returns a string. To convert it back to float, parseFloat() is used