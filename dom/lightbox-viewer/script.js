const closeBtn = document.getElementById("close-btn");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((img) =>
  img.addEventListener("click", () => selectImg(img)),
);

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

function selectImg(img) {
  lightbox.style.display = "flex";

  const minusThumb = img.src.split("-");
  const newURL = `${minusThumb[0]}.jpg`;

  lightboxImage.src = newURL;
}
