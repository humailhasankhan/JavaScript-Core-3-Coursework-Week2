const myUnorderedList = document.getElementById("dog-list");
const imageButton = document.getElementById("image-changer");

imageButton.addEventListener("click", getImageFetch);

function getImageFetch() {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      image.src = data.message;
      image.alt = "random dog image";
      listItem.appendChild(image);
      myUnorderedList.appendChild(listItem);
    })
    .catch((error) => {
      console.log(error);
    });
}
