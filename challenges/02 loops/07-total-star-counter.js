// You just need to implement the totalStars function
function totalStars(starLevels) {
  return starLevels.flat().length;
}

function totalStarsOne(starLevels) {
    // total to keep track of the total number of stars
  let total = 0;
  // loop through each level of stars
  for (let i = 0; i < starLevels.length; i++) {
    // add the number of stars in the current level to the total
    total += starLevels[i].length;
  }
  return total;
}