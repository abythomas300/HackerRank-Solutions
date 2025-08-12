// Problem Statement: https://www.hackerrank.com/challenges/bon-appetit/problem/

// Algorithm:
// 1. Sum all the prices together
// 2. Subtract value of bill[k] from the sum
// 3. Find half of the difference
// 4. Subtract the difference from 'b'
// 5. If difference we get is equal to 0, return 'Bon Appetit' else return difference

// Solution:
function bonAppetit(n, k, bill, b) {
  
    let totalCost = 0;
    bill.forEach(function(itemCost){
      totalCost += itemCost;
    });
  
    let totalExcludingNeglectedItem = totalCost - bill[k];
  
    let expectedCost = totalExcludingNeglectedItem / 2;
  
    let overcharge = b - expectedCost;
  
    if (overcharge === 0) {
      console.log('Bon Appetit');
    } else {
      console.log(overcharge);
    }
  
}

bonAppetit(4, 1, [3, 10, 2, 9], 12)