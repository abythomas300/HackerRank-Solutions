// Problem Statement: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// Algorithm:
// 1. Select the first element from array
// 2. Compare it with every other element in array
// 3. If their sum is divisible by 5, increment the counter by 1
// 4. Repeat step 1,2,3 for every other element in array
// 5. Return the counter
 
// Solution:
function divisibleSumPairs(n,k,ar){
    let counter = 0
    if(n == 1){
      return 0
    }else{
      console.log("Pairs are:")
      for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
          if((ar[i]+ar[j])%k===0){
            console.log(`[${ar[i]},${ar[j]}]`)
            counter ++
          }
        }
      }
    }
    return counter
  }

divisibleSumPairs(6, 3, [1,3,2,6,1,2])

// Algorithmic Complexity
// Time: O(n^2)
// Space: O(1)

// Time Complexity can be optimized to O(n+k) using 'mod-buckets' method