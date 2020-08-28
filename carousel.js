function loadProfile(filename) {
  fetch(`${filename}.html`)
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("card-content-data").innerHTML = data;
    })
    .catch((err) => {
      console.log(err);
    });
  // xhttp.open("GET", `./assets/content/${filename}.html`, false);
  // xhttp.send();
  // let content = document.getElementById("card-content-data");
  // content.innerHTML = `<object data="./assets/content/${filename}.html" ></object>`;
}

loadProfile("biodata");
