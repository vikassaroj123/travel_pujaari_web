const galleryContainer = document.querySelector(".gallery-container");
const galleryControlContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryNavItems = document.querySelectorAll(".gallery-nav .nav-item");
const sectionContainer = document.querySelector(".section-container"); // Select section container

class Carousel {
  constructor(container, items, controls, navItems, section) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.navItems = navItems;
    this.sectionContainer = section;
    this.currentIndex = 2;
  }

  updateGallery() {
    this.carouselArray.forEach((el, i) => {
      el.classList.remove(
        "gallery-item-1",
        "gallery-item-2",
        "gallery-item-3",
        "gallery-item-4",
        "gallery-item-5"
      );
      el.classList.add(
        `gallery-item-${
          ((i + this.currentIndex) % this.carouselArray.length) + 1
        }`
      );
    });

    this.updateBackgroundImage(); // Update background image
    this.updateNavIndicators();
  }

  updateBackgroundImage() {
    // Ensure we're selecting the center gallery item (gallery-item-3)
    const activeItem = this.carouselArray.find((item) =>
      item.classList.contains("gallery-item-3")
    );

    if (activeItem) {
      // Select the image (img element)
      const imgElement = activeItem;

      // Update the background image of the section container
      const backgroundImage = imgElement ? `url(${imgElement.src})` : "";
      if (backgroundImage) {
        this.sectionContainer.style.backgroundImage = backgroundImage;
        this.sectionContainer.style.backgroundSize = "cover";
        this.sectionContainer.style.backgroundPosition = "center";
      }

      // Update the left paragraph content (heading and description)
      const heading = imgElement.getAttribute("data-heading");
      const description = imgElement.getAttribute("data-description");

      document.getElementById("carousel-heading").textContent = heading;
      document.getElementById("carousel-description").textContent = description;
    }
  }

  updateNavIndicators() {
    this.navItems.forEach((navItem, i) => {
      navItem.classList.toggle("selected", i === this.currentIndex);
    });
  }

  setCurrentState(direction) {
    if (direction.className.includes("gallery-controls-previous")) {
      this.currentIndex =
        (this.currentIndex - 1 + this.carouselArray.length) %
        this.carouselArray.length;
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      const button = document.createElement("button");
      button.className = `gallery-controls-${control}`;
      galleryControlContainer.appendChild(button);
    });
  }

  useControls() {
    const triggers = [...galleryControlContainer.childNodes].filter(
      (node) => node.nodeType === 1
    );
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls,
  galleryNavItems,
  sectionContainer // Pass section container
);

exampleCarousel.setControls();
exampleCarousel.updateGallery(); // Initialize gallery with the correct state
exampleCarousel.useControls();
