// Problem Statement: https://www.hackerrank.com/challenges/staircase/problem

// Algorithm  
// 1. Loop through each row
// 2. print ' '(whitespace) n-i times and print '#' i times in each row using .repeat() method

// Solution 
function staircase(n) {
    for(let i = 1; i <= n; i++) {
      let row = " ".repeat(n-i) + "#".repeat(i);
      console.log(row)
    }
  }
  
