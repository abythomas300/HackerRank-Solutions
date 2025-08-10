// Problem Statement: https://www.hackerrank.com/challenges/day-of-the-programmer/problem/

// Solution:

function dayOfTheProgrammer(year){
  
  // total number of days from January to August(inclusive)
  let totalRegularYearDays = 243
  let totalLeapYearDays = 244  
  
  // Julian Calender
  if(year>=1700 && year<=1917) {

    if(year%4 == 0) {
      let remDays = 256 - totalLeapYearDays
      return `${remDays}.09.${year}`
    } else {
      let remDays = 256 - totalRegularYearDays
      return `${remDays}.09.${year}`
    }

  } else if(year == 1918) {  // Transition Year

    let totalDays = 230
    let remDays = 256 - totalDays
    return `${remDays}.09.${year}`

  } else {  // Gregorian Calender

    if((year%100==0 && year%400==0) || (year%100!= 0 && year%4==0) ){
      let remDays = 256 - totalLeapYearDays
      return `${remDays}.09.${year}`
    } else {
      let remDays = 256 - totalRegularYearDays
      return `${remDays}.09.${year}`
    }

  }

    
}
  
  
  
  dayOfTheProgrammer(1800)

// Algorithmic Complexity
// Time: O(1)
// Space: O(1)

// 'remDays' - number of days remaining after counting till august(inclusive)