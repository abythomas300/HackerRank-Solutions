// Problem Statement: https://www.hackerrank.com/challenges/between-two-sets/problem

// Algorithm:
// 1. Find smallest and largest element among the two arrays
// 2. Set the smallest element as lower bound and largest element as upper bound
// 3. Find the elements which are the factors of all the first array(arr1) elements
// 4. Store all satisfied elements into a new array(firstConditionPassElements)
// 5. Check what all numbers in (firstConditionPassElements) array, which are factors of the second array(arr2)
// 6. Store elements that satisfy step 5 to a new array(secondConditionPassElements)
// 7. Return the count of elements in secondConditionPassElements

function betweenTwoSets(arr1, arr2) {
  
    // finding smallest and largest elements in both arrays 
    let smallestInArr1 = arr1[0]
    let largestInArr1 = arr1[0]
    let smallestInArr2 = arr2[0]
    let largestInArr2 = arr2[0]
  
    arr1.forEach(function(element){
      if(element < smallestInArr1){
        smallestInArr1 = element
      }
      if(element > largestInArr1){
        largestInArr1 = element
      }
    })
  
    arr2.forEach(function(element){
      if(element < smallestInArr2){
        smallestInArr2 = element
      }
      if(element > largestInArr2){
        largestInArr2 = element
      }
    })
  
    // setting lower and upper bound 
    let lowerBound = (smallestInArr1 < smallestInArr2)?smallestInArr1:smallestInArr2
    let upperBound = (largestInArr1 > largestInArr2)?largestInArr1:largestInArr2
    
    // checking first condition
    let firstConditionPassElements = []
    
    for(let i=lowerBound; i<=upperBound; i++){
      let factorCount = 0;
      arr1.forEach(function(element){
        if(i%element == 0){
          factorCount += 1
        }
      })
      if(factorCount == arr1.length){
        firstConditionPassElements.push(i)
      }
    }
    
    // checking second condition
    let secondConditionPassElements = []
    
    firstConditionPassElements.forEach(function(i){
      let factorCount = 0;
      arr2.forEach(function(element){
        if(element%i == 0){
          factorCount += 1
        }
      })
  
      if(factorCount == arr2.length){
        secondConditionPassElements.push(i)
      }
    })
    
    // counting the number of elements that pass both conditions 
    console.log("Elements satisfy both conditions are: ", secondConditionPassElements)
    console.log(`Total ${secondConditionPassElements.length} elements satisfy both conditions.`)
    
    return secondConditionPassElements.length
  }
  

  betweenTwoSets(2, 3, [2,4], [16, 32, 96])
  

// Note: This code can be optimized further.