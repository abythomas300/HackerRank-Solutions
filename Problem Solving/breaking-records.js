// Problem Statement: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

// Algoirthm:
// 1. set the lowestScore,highestScore as first game score
// 2. select the second game score
// 3. compare it with the 'lowestScore' and 'highestScore'
// 4. if currentScore > highestScore, increment maxCount by 1 and assign currentScore to highestScore
// 5. if currentScore < lowestCore, increment minCount by 1 and assign currentScore to lowestScore
// 6. return maxCount and minCount

//Solution:
function breakingRecords(n, scores) {
    let lowestScore = scores[0]
    let highestScore = scores[0]
    let minCount = 0
    let maxCount = 0
    let tieCount = 0
    scores.forEach(function(score){
      if((score == lowestScore)||(score == highestScore)){ // counting how many tie
        tieCount += 1
      }
      if(score > highestScore) {
        highestScore = score
        maxCount += 1
      }
      if(score < lowestScore) {
        lowestScore = score
        minCount += 1
      }
    })
    let record = []
    record.push(maxCount, minCount)
    
    return record
  }
  

breakingRecords(9, [3,4,21,36,10,28,35,5,24,42])