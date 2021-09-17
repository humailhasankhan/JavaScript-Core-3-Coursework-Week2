const container = document.querySelector(".container");
const image = document.createElement("img");

function getDataFetch() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      image.src = data.img;
      image.alt = data.alt;
      container.appendChild(image);
    })
    .catch((error) => console.log("Error:", error));
}
getDataFetch();
