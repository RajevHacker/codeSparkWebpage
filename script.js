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

//navbar

//logos
const track = document.getElementById("carousel-track");
const dotsContainer = document.getElementById("dots");
const slides = document.querySelectorAll(".carousel-slide");
const slidesPerView = 4;
const slideCount = slides.length;

for (let i = 0; i < slidesPerView; i++) {
  const clone = slides[i].cloneNode(true);
  track.appendChild(clone);
}

let currentIndex = 0;
const totalDots = slideCount;
let isTransitioning = false;

for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
}

function moveToSlide(index) {
  if (isTransitioning) return;
  currentIndex = index;
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${25 * index}%)`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex % totalDots);
  });
}

setInterval(() => {
  if (isTransitioning) return;

  currentIndex++;
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${25 * currentIndex}%)`;
  updateDots();

  // If we reach the end, reset seamlessly
  if (currentIndex === slideCount) {
    isTransitioning = true;
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0%)`;
      currentIndex = 0;
      updateDots();
      isTransitioning = false;
    }, 600); // wait until after the transition
  }
}, 2000);

// cards
// Open modal on button click
document.querySelectorAll(".see-more").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

// Close modal on 'x' click
document.querySelectorAll(".modal .close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  }
});
