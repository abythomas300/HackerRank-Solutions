// Problem Statement: https://www.hackerrank.com/challenges/kangaroo/problem

// Algorithm:
// 1. Check whether both velocities are same, if same - they will not meet (return NO)
// 2. Check whether 'n' is a whole number, if satisfied - they will meet at some point (return YES)

// Parameter Details:
// x1 - initial position of first kangaroo
// x2 - initial position of second kangaroo
// v1 - velocity(units covered per jump) of first kangaroo
// v2 - velocity(units covered per jump) of second kangaroo

// Solution:
function numberLineJumps(x1, x2, v1, v2){
    
    // Checking whether both velocities are same
    if(v1 === v2) {
        return "NO"
    }
    
    // Checking whether n is a whole number
    n = (x1 - x2)/(v2 - v1)
    if(n>=0 && Number.isInteger(n)) {
        return "YES"
    }

    // Returning NO by default
    return "NO"
}

// - - Solving for n - -
// Original Fourmula --> (x1+n*v1) = (x2+n*v2)
// After solving, we get n = (x1 - x2) / (v2 - v1)