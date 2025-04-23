const tabContents = [
  "We deliver cutting-edge technology and AI solutions to help businesses innovate, automate, and stay ahead in a fast-evolving market ",
  "Drive innovation at lightning speed with customizable AI solutions tailored to meet dynamic industry demands.",
  "Easily integrate with existing systems, apps, and workflows to enhance operational efficiency and reduce manual processes across teams.",
  "Our platform is designed with user experience in mind, ensuring intuitive interfaces and responsive support to meet customer needs.",
  "We offer affordable, cloud-based solutions that maximize business value while minimizing operational costs, delivering a high ROI for all.",
];

function switchTab(index) {
  const tabs = document.querySelectorAll(".tab");
  const tabText = document.getElementById("tab-text");

  tabs.forEach((tab) => tab.classList.remove("active"));
  tabs[index].classList.add("active");
  tabText.textContent = tabContents[index];
}

const track = document.getElementById("carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.getElementById("dots");

const logosPerView = 4;
const totalSlides = slides.length;
const totalPages = Math.ceil(totalSlides / logosPerView);
let currentPage = 0;

for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
}

function moveToSlide(pageIndex) {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${
    pageIndex * slideWidth * logosPerView
  }px)`;

  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("active"));
  document.querySelectorAll(".dot")[pageIndex].classList.add("active");
  currentPage = pageIndex;
}

document.querySelectorAll(".see-more").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
