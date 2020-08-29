let index = 0;
let minIndex = 0;
let maxIndex = 5;
let contentCount = maxIndex - minIndex + 1;
let contentWidths = [];
// for(let i = minIndex; i)

function initializeCarousel() {
  let currentWidth = 0;
  for (let i = 0; i <= maxIndex; i++) {
    // document.getElementById(`card-content-data-${i}`).style.display = "none";
    contentWidths.push(currentWidth);
    currentWidth += document.getElementById(`card-content-data-${i}`)
      .clientWidth;
  }
}

function nextPage() {
  let contentWidth = document.getElementById("card-content-data").clientWidth;
  console.log(contentWidth);
  if (index < maxIndex) {
    // document.getElementById(`card-content-data-${index}`).style.display =
    //   "none";
    // index++;
    // document.getElementById(`card-content-data-${index}`).style.display =
    //   "block";
    index++;
    document.getElementById(
      `card-content-data`
    ).style.transform = `translateX(-${contentWidths[index]}px)`;
  }
}

function prevPage() {
  let contentWidth = document.getElementById("card-content-data").clientHeight;
  if (index > minIndex) {
    index--;
    document.getElementById(
      `card-content-data`
    ).style.transform = `translateX(-${contentWidths[index]}px)`;
    // document.getElementById(`card-content-data-${index}`).style.display =
    //   "none";
    // index--;
    // document.getElementById(`card-content-data-${index}`).style.display =
    //   "block";
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

function generateProjectListItem(arr) {
  let container = document.getElementById("project-container-content");
  let content = `
  <div class="work-list-item">
    <div style="font-weight: 600">
      ${arr[0].name}
    </div>
    <div>${arr[0].description}</div>
  </div>
  `;

  for (let i = 1; i < arr.length; i++) {
    content += `
    <hr />
    <div class="work-list-item">
      <div style="font-weight: 600">
        ${arr[i].name}
      </div>
      <div>${arr[i].description}</div>
    </div>
    
    `;
  }

  container.innerHTML = content;
}
