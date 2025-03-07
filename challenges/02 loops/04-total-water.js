// You just need to implement the totalWater function
function totalWater(waterAmounts) {
  // initialize total to 0
  let total = 0;
  //   loop through each bottle's water amount and add it to total
  for (let i = 0; i < waterAmounts.length; i++) {
    total += waterAmounts[i];
  }
  // return total water filled in all bottles
  return total;
}
