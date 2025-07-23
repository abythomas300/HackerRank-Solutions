// Problem statement --> https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Solution
function compareTriplets(a, b) {  //a=[5,6,7] b=[3,6,10]
    
    let aliceMerit = 0;
    let bobMerit = 0;
    
    //comparing both of their review scores
    for(let i = 0; i < a.length; i++) {  // i = 0,1,2
        if( a[i] > b[i] ) {
            aliceMerit++;
        } else if ( b[i] > a[i] ){
            bobMerit++
        }
    }
    
    let pointsEarned = [];
    pointsEarned.push(aliceMerit);
    pointsEarned.push(bobMerit);
    
    return pointsEarned
    
}