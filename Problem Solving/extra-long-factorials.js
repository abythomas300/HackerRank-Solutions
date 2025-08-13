// Problem Statement: https://www.hackerrank.com/challenges/extra-long-factorials/problem/

// Algorithm:
// ('Numbers' datatype has a range limit upto 1.7e^n and long factorials may exceed it, so we have to use BigInt datatype here)
// 1. Declare the 'fact' variable as 1 (and BigInt)
// 2. Do fact * i and store it to 'fact'
// 3. Repeat step 2 till value i reaches 1
// 4. Convert the BigInt result to string and display it

// Solution:
function extraLongFactorials(n) {
    
    let fact = 1n

    for(let i=n; i>=1; i--){
      fact = fact * BigInt(i)
    }
    
    console.log(fact.toString())  
    
}