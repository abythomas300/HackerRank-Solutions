// Problem Statement ---> https://www.hackerrank.com/challenges/diagonal-difference/problem

// Solution
function diagonalDifference(arr) {
    let d1Sum = 0;
    let d2Sum = 0;
    let difference = 0;
    //calculating first diagonal
    for(let i = 0; i < arr.length; i++){
      d1Sum += arr[i][i];
    }
    //calculting second diagonal
    for(let i=0, j=arr.length-1; i<arr.length && j>=0; i++,j--) {
      d2Sum += arr[i][j];
    }
    //calculating the difference
    difference = Math.abs(d1Sum - d2Sum)
    
    return difference
  }