let index = 0;
let minIndex = 0;
let maxIndex = 4;

function nextPage() {
  if (index < maxIndex) {
    document.getElementById(`card-content-data-${index}`).style.display =
      "none";
    index++;
    document.getElementById(`card-content-data-${index}`).style.display =
      "block";
  }
}

function prevPage() {
  if (index > minIndex) {
    document.getElementById(`card-content-data-${index}`).style.display =
      "none";
    index--;
    document.getElementById(`card-content-data-${index}`).style.display =
      "block";
  }
}
