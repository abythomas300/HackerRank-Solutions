// Problem statement: https://www.hackerrank.com/challenges/a-very-big-sum/problem

// Solution
function aVeryBigSum(ar) {
    let result = 0;
    ar.forEach(function (number){
        result +=number
    })
    return result;
}