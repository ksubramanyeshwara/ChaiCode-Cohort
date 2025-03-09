// You just need to implement the workingDays function
function workingDays(days) {
  // numberOfWorkingDays to keep track of the number of working days
  let numberOfWorkingDays = 0;
  for (let i = 0; i < days.length; i++) {
    // if the day is not Saturday or Sunday, increment numberOfWorkingDays by 1
    if (
      days[i].toLowerCase() !== "saturday" &&
      days[i].toLowerCase() !== "sunday"
    ) {
      numberOfWorkingDays++;
    }
  }
  return numberOfWorkingDays;
}
