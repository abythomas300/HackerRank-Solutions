// Problem Statement: https://www.hackerrank.com/challenges/time-conversion/problem

// Algorithm:
// 1. Get the hour(HH), meridiem(AM/PM) and remining characters separately from the input time using split()
// 2. Check conditions based on AM and PM and other sub conditions (conditions are clearly commented on code)
// 3. Add extra '0' at front if HH lacks one 
// 4. Concatenate the new hour(HH) with the existing MM:SS and respective meridiem

// Solution:
function timeConverstion(s) {
  
  // getting hour
  let hour = s.slice(0,2)
  // getting time string except hour
  let minAndSec = s.slice(2, -2)
  // converting string hour to integer type
  let intHour = Number(hour)
  // getting meridiem
  let meridiem = s.slice(-2)

  // checking conditions and calculating new hour(HH)
  if( (intHour === 12)&&(meridiem === 'PM') ) { // 12PM
    intHour = 12;
  } else if((meridiem === 'AM')) {  // checking conditions that fall when meridiem is 'AM'
    if(intHour === 10 || intHour === 11) {  
      intHour = intHour         // avoids adding '0' infront of HH if hour is 10 or 11
    }else if(intHour === 12) {  // 12AM
      intHour = 0
    }else {
      intHour = '0'+intHour  // Adding '0' infront when there is single digit in HH
    }
   } else {
     intHour += 12;  // adding 12 to hours at PM meridiem (except 12PM)
   }

  // converting calculated hour to string
  if(intHour == 0) {
    intHour = '00'
  } else {
    intHour = intHour.toString()
  }
  let stringHour = intHour.toString()
  // concatenating converted original with minutes
  let militaryTime = stringHour + minAndSec
  
  console.log(militaryTime); // for testing
  return militaryTime;
}



// FOR TESTING
// input: 12 AM to 11 AM
timeConverstion(`12:29:53AM`)
for(let i = 1; i <= 9; i++) { 
  let input = `0${i}:29:53AM` // 1 AM to 9 AM
  timeConverstion(input)
}
timeConverstion(`10:29:53AM`)
timeConverstion(`11:29:53AM`)
//12PM to 11 PM
timeConverstion(`12:29:53PM`)
for(let i = 1; i <= 9; i++) {
  let input = `0${i}:29:53PM` // 1 PM to 9 PM
  timeConverstion(input)
}
timeConverstion(`10:29:53PM`)
timeConverstion(`11:29:53PM`)



