let index = 0;
let minIndex = 0;
let maxIndex = 5;

function initializeCarousel() {
  for (let i = minIndex + 1; i <= maxIndex; i++) {
    document.getElementById(`card-content-data-${i}`).style.display = "none";
  }
}

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

function generateSkillChip(arr) {
  let container = document.getElementById("skill-container-content");
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    content += `<div class="skill-chip">${arr[i]}</div>`;
  }

  container.innerHTML = content;
}

function generateWorkListItem(arr) {
  let container = document.getElementById("work-container-content");
  let content = `
  <div class="work-list-item">
    <div style="font-weight: 600">
      ${arr[0].name} (${arr[0].start} - ${arr[0].end})
    </div>
    <div>${arr[0].job}</div>
  </div>
  `;

  for (let i = 1; i < arr.length; i++) {
    content += `
    <hr />
    <div class="work-list-item">
      <div style="font-weight: 600">
        ${arr[i].name} (${arr[i].start} - ${arr[i].end})
      </div>
      <div>${arr[i].job}</div>
    </div>
    
    `;
  }

  container.innerHTML = content;
}
