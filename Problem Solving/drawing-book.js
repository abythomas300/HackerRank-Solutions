// Problem Statement: https://www.hackerrank.com/challenges/drawing-book/problem


// Algorithm: 
// 1. Check whether the target page is the first page or the last page of the book, if yes, return 0
// 2. Check whether total number of pages is even or odd
// 3. If odd, assign s = 2
// 4.  Check whether target page is the second last page, if yes, return 0 
// 5. If even, assign s = 1
// 7. Do FORWARD LOOP and BACKWARD LOOP
// 8. Check whether both pageCountF and pageCountB are the same, if yes, return pageCountF
// 9. If not same, check which has the smalles value and return it

// PageCountF --> Number of pages needs to be turned from the front of the book (FORWARD LOOP) 
// PageCountB --> Number of pages needs to be turned from the back of the book (BACKWARD LOOP) 


// Solution: 
function pageCount(n, p) {

    console.log("Total number of pages: ", n)
    console.log("Target page: ", p)
  
    let isEven = null
    let s = 0
    let pageCountF = 0
    let pageCountB = 0
    
    // checking whether target page is first page or last page
    if(p === n || p === 1) {
      console.log("Target page is either the first page or last page.")
      return 0
    }
    
    // checking whether number of pages is even or odd
    if(n%2 === 0) {
      // When page count is even
      console.log("Even Number of Pages Detected")
      isEven = true
      s = 1
    } else {
      // When page count is odd
      console.log("Odd Number of Pages Detected")
      // checking whether target page is in the pages itself
      if(p === n-1) {
        console.log("Target page is at the last pages itself, so no turn needed.")
        return 0
      }
      isEven = false
      s = 2
    }
    
    // FORWARD LOOP
    console.log("Initiating Forward Loop")
    for(let i = 2; i<=p; i+=2) {
      pageCountF += 1
    }
    console.log("Forward Loop Ended")
    console.log("page count F", pageCountF)
  
    // BACKWARD LOOP
    console.log("Initiating Backward Loop")
    for(let i = n-s; i>=p; i-=2) {
      pageCountB += 1
    }
    console.log("Backward Loop Ended")
    console.log("page count B", pageCountB)
    
    // checking whether both counts are the same
    if(pageCountF === pageCountB)
      return pageCountF
    
    // checking which count is the smallest
    let result = pageCountF> pageCountB? pageCountB :  pageCountF
    return result
    
  }
  
  
// method invoke
pageCount(5, 4)


  // Algorithmic Complexity:
  // Time: O(n+p)
  // Space: O(1)