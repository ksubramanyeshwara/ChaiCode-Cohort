// You just need to implement the countSteps function
function countSteps(targetSteps) {
  // stepCount to keep track of the number of steps
  let stepCount = 0;
  for (let i = 1; i <= targetSteps; i++) {
    // if stepCount is equal to targetSteps, return stepCount
    if (stepCount === i) {
      return stepCount;
    }
    // increment stepCount by 1
    stepCount = i;
  }
  return stepCount;
}
