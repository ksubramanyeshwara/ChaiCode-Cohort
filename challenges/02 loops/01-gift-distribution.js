function distributeGifts(totalGifts, friends) {
  let giftsDistributed = 0;
  for (let i = 0; i < friends; i++) {
    if (totalGifts > 0) {
      giftsDistributed++;
      totalGifts--;
    }
  }
  return giftsDistributed;
}