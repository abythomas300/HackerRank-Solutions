// Problem Statement: https://www.hackerrank.com/challenges/mini-max-sum/problem

// Algorithm
// 1. Find total sum of all elements
// 2. traverse through each element
// 3. Subtract value of each element from sum and push it to another array
// 4. Do step 3 for every element
// 5. From resultant array, find maximum and minimum element
// 6. Print maximum and minimum element


function minmax(arr) {
    let sum = 0;
    let result = [];
    
    arr.forEach(function(number){
      sum += number;
    })
    
    for(let i = 0; i < arr.length; i++){
      result.push(sum-arr[i])
    }
    
    console.log(Math.min(...result)+' '+Math.max(...result));
  }
  
