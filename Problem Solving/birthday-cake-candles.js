// Problem Statement: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// Algorithm:
// 1. Assign the first array element as the largest candle
// 2. Loop through array, compare whether current element is larger value than 'largestCandle'
// 3. If the current element is largest, assign it to 'largestCandle' and reset the 'count' to 1
// 4. Else if current element and 'largestCandle' are of same value, increase 'count'

// Solution:
function birthdayCakeCandles(candles) {
    let largestCandle = candles[0];
    let count = 0;
    candles.forEach(function(candle){
      if(candle > largestCandle) {
        largestCandle = candle;
        count = 1;  // reset counter to 1
      } else if(candle === largestCandle) {
        count +=1;
      }
    })
     return count;
  }

// Resource consumption:
//  Time Complexity O(n)
//  Space Complexity O(1)