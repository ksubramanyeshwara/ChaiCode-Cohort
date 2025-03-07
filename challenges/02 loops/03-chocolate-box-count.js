function countBoxes(totalBars, barsPerBox) {
  let boxes = 0;
  while (totalBars >= barsPerBox) {
    boxes++;
    totalBars = totalBars - barsPerBox;
  }
  return boxes;
}
