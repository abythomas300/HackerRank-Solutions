// Problem Statement --> https://www.hackerrank.com/challenges/simple-array-sum/problem

// Solution:
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(function (number){
        sum += number
    })
    return sum;
}