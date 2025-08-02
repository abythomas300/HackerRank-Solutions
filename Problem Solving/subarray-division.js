// Problem Statement: https://www.hackerrank.com/challenges/the-birthday-bar/problem

// Algorithm: 
// 1. Find 'rounds' using the equation ' rounds = length - (m - 1) '
// 1. If array only have 1 element, return 1
// 2. Else, take the first 'm' number of elements from given array
// 3. Add all the selected elements together
// 4. Increment 'm' by 1
// 5. Check whether the sum is equal to 'd'(birth day)
// 6. If it is equal, increment 'counter' by 1
// 7. Do this for 'rounds' times
// 8. Return 'counter'

// Solution:
function subarrayDivision(s, d, m) {
    
    let counter = 0
    let rounds = s.length-(m-1)
    let sum = 0
    let upperBound = m
    if(s.length == 1) {   // if there is only one square of chocolate left
      return 1
    } else {
      for(let i = 0; i <= rounds; i++) {
      sum = 0  // reset 'sum'
        for(let j = i; j < i+m; j++) {
         sum += s[j]
        }
        upperBound += 1 // incrementing upperBound to maintain the length of sliding window constant
      if(sum ==  d) {
        counter += 1
      }
    }
   }    
    console.log(counter)
    return counter      
}

subarrayDivision([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7)

// Algorithmic Complexity:
// Time : O(n^2)
// Space: O(1)