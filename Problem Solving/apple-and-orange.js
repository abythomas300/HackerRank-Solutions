// Problem Solving: https://www.hackerrank.com/challenges/apple-and-orange/problem

// Input: 
// pararmeters - s, t, a, b, apples, oranges
// s(variable) - start of house length
// t(variable) - end of house length
// a(variable) - position of apple tree
// b(variable) - position of orange tree
// apples(array): contains position of apples thrown from point 'a'
// oranges(array): contains position of apples thrown from point 'b'

// Algorithm:
// 1. Loop through each element of 'apple' array
// 2. Check whether a+element_value(exact x co-ordinate of fallen apple) is between s and t
// 3. If x co-ordinate is between s and t, increment respective flag for appleFallCount
// 4. Repeat step 1, 2, 3 for 'oranges' array using respective variables
// 5. Print value of appleFallCount first then orangeFallCount

// Solution:
function appleAndOrange(s, t, a, b, apples, oranges) {
  
    let appleFallCount = 0
    let orangeFallCount = 0
  
    apples.forEach(function(apple) {
      if((apple+a >= s) && (apple+a <= t)) {
        appleFallCount += 1
      }
    })
    
    oranges.forEach(function(orange){
      if((orange+b >= s) && (orange+b <= t)){
        orangeFallCount += 1
      }
    })
    
    console.log(appleFallCount)
    console.log(orangeFallCount)
  }
  

  
// For testing
appleAndOrange(7, 10, 4, 12, [2,3,-4], [3,-2,-4]);