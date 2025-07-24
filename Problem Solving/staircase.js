// Problem Statement: https://www.hackerrank.com/challenges/staircase/problem

// Algorithm
// 1. Create outer loop for each row of the pattern --
// 2. Create inner loop for printing each element(column) of the pattern --
// 3. Set a limit variable that decides whether to print whitespace or '#' --
// 4. Check condition: if value of j is >= limit, then print '#' otherwise ' ' --
// 5. Put a line break after each iteration of the inner loop
// 6. Decrease the value of the limit by 1 after each iteration of the inner loop

//Solution
function staircase(n) {

  let limit = n;

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        if(j >= limit) {
            process.stdout.write("#")
        } else {
            process.stdout.write(" ")
        }
    }
    console.log(" ");
    limit--;
 }

}

staircase(6);