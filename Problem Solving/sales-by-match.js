// Problem Statement: https://www.hackerrank.com/challenges/sock-merchant/problem

// Algorithm:
// 1. Take the zeroth element
// 2. Traverse from the first element
// 3. Check whether zeroth element is euqal to i th element
// 4. If yes, increment 'pairCount' by one
// 5. Remove zeroth and ith element from array
// 6. Assign i = 0
// 7. If no, increment i by 1, repeat 3
// 8. After coming out of for loop, remove the zeroth element
// 9. Once, coming out of while loop, return 'pairCount'

// Solution: 

function sockMerchant(n, ar){
  
    let pairCount = 0;
    
    while(ar.length>1) {
      for(let i = 1; i < ar.length; i++) {
        if(ar[0] === ar[i]) {
          console.log("Match Found: ",ar[0], " and ", ar[i] )
          pairCount += 1
          ar.splice(0, 1)
          ar.splice(i-1, 1) // i-1 is given because, once ar.splice(0,1) is executed, one indices will be lost.
          i = 0
        }
      }
      console.log("No match found for ", ar[0])
      ar.splice(0, 1) // removing the element since there is no possible pair exists for this element, in the array
    }
    
    return pairCount
}
  

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

