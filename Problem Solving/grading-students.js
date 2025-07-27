// Problem Statement: https://www.hackerrank.com/challenges/grading/problem

// Algorithm:
// 1. Loop through each array elements (marks)
// 2. If mark < 38, no change.
// 3. Else if, Get the last digit of the mark
// 4. If last digit is 4 or 9, increment grade by 1, Else if last digit is 3 or 8, increment grade by 2
// 5. Find difference between that number and mark
// 6. If difference is < 3, replace mark with the new number

// Solution:
function gradingStudents(grades) {
    
    let roundedGrades = []
    let nearestFiveMultiple = 0;
    let difference = 0;
    
    grades.forEach(function(grade){
      if(grade < 38) {  // 0 to 37
        roundedGrades.push(grade);
      }else{ // 38 to 100
        let lastDigit = grade%10 // getting the last digit
        if(lastDigit == 4 || lastDigit == 9) {
          nearestFiveMultiple = grade+1;
        } else if(lastDigit == 3 || lastDigit == 8) {
          nearestFiveMultiple = grade+2;
        } else {
          nearestFiveMultiple = grade
        }
        
        difference = nearestFiveMultiple - grade;
        if(difference < 3) {
          grade = nearestFiveMultiple
        } 
        roundedGrades.push(grade)  
      }
    })
    return roundedGrades;
  
}




// Alternate Solution:
function gradingStudents(grades) {
    
    let roundedGrades = []
    let nearestFiveMultiple = 0;
    let difference = 0;
   
    grades.forEach(function(grade){
      if(grade < 38) {  // 0 to 17
        roundedGrades.push(grade);
      }else{
        currentGrade = grade;
        let i = currentGrade+1;
        while(i%5){
          i++;
        }
        nearestFiveMultiple = i;
        difference = nearestFiveMultiple - grade;
        if(difference < 3){
          grade = nearestFiveMultiple
        } 
        roundedGrades.push(grade)
      }
    })
    return roundedGrades;
  
}
  