// Problem Statement: https://www.hackerrank.com/challenges/migratory-birds/problem/

// Algorithm: (written as comments)

// Solution:
function migratoryBirds(arr) {
  
    let myMap = new Map()
    let counter = 1

    // sort given array
    arr.sort()
    
    // find duplicates and map it
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === arr[i+1]) {
        counter ++
      } else if(counter>1) {
        myMap.set(arr[i], counter)
        counter = 1
      } else {
        counter = 1
      }
    }
  
    // set first element's value as 'maximum'
    let maximum = myMap.entries().next().value[1];  
    
    // find maximum value among 
    myMap.forEach(function(value,key){
      if(value > maximum){
        maximum = value
      }
    })
    
    let highestFrequency = new Map();
    
    // find and map highest value key-value pairs which have same value 
    myMap.forEach(function(value, key){
      if(value === maximum){
        highestFrequency.set(key, value)
      }
    })
    
    // set first element's value as 'minimum'
    let minimum = highestFrequency.entries().next().value[0]
    
    if(highestFrequency.size==1) {
      return highestFrequency.entries().next().value[0] 
    } else {                                           // if there are multiple highest value pairs
      highestFrequency.forEach(function(value, key){   
        if(key < minimum) {
            minimum = value
        }
      })
      return minimum
    }
    
  }

// Algorithmic Complexity: 
// Time: O(n log n)
// Space: O(n)
  

  migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])