const images = [
  "assets/images/image1.jpg",
  "assets/images/image2.jpg",
  "assets/images/image3.jpg",
  "assets/images/image4.jpg",
];

let current = 0;

function openImage(index) {
  current = index;

  document.getElementById("viewer").style.display = "flex";

  document.getElementById("viewerImage").src = images[current];
}

function closeViewer() {
  document.getElementById("viewer").style.display = "none";
}

function nextImage() {
  current++;

  if (current >= images.length) {
    current = 0;
  }

  document.getElementById("viewerImage").src = images[current];
}

function previousImage() {
  current--;

  if (current < 0) {
    current = images.length - 1;
  }

  document.getElementById("viewerImage").src = images[current];
}
