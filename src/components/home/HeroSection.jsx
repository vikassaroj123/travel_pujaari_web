import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    console.log("Effect runs");
    const galleryContainer = document.querySelector(".gallery-container");
    const galleryControlContainer = document.querySelector(".gallery-controls");
    const galleryControls = ["previous", "next"];
    const galleryItems = document.querySelectorAll(".gallery-item");
    const galleryNavItems = document.querySelectorAll(".gallery-nav .nav-item");
    const sectionContainer = document.querySelector(".section-container"); // Select section container

    console.log("galleryContainer:", galleryContainer);
    console.log("galleryControlContainer:", galleryControlContainer);
    console.log("galleryItems:", galleryItems);
    console.log("galleryNavItems:", galleryNavItems);
    console.log("sectionContainer:", sectionContainer);
    // Fallback to placeholder if the actual container is not found
    const controlContainerToUse =
      galleryControlContainer ||
      document.querySelector("#gallery-controls-placeholder");

    if (!galleryContainer || !sectionContainer) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    class Carousel {
      constructor(container, items, controls, navItems, section) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.navItems = navItems;
        this.sectionContainer = section;
        this.currentIndex = 2;
        this.autoSlideInterval = null; // Store the interval ID for autoplay
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
        this.updateNavIndicators(); // Update navigation indicators
      }

      updateBackgroundImage() {
        const activeItem = this.carouselArray.find((item) =>
          item.classList.contains("gallery-item-3")
        );

        if (activeItem) {
          const imgElement = activeItem;
          const backgroundImage = imgElement ? `url(${imgElement.src})` : "";
          if (backgroundImage) {
            this.sectionContainer.style.backgroundImage = backgroundImage;
            this.sectionContainer.style.backgroundSize = "cover";
            this.sectionContainer.style.backgroundPosition = "center";
          }

          const heading = imgElement.getAttribute("data-heading");
          const description = imgElement.getAttribute("data-description");

          document.getElementById("carousel-heading").textContent = heading;
          document.getElementById("carousel-description").textContent =
            description;
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
          this.currentIndex =
            (this.currentIndex + 1) % this.carouselArray.length;
        }
        this.updateGallery();
      }

      setControls() {
        if (controlContainerToUse) {
          this.carouselControls.forEach((control) => {
            const button = document.createElement("button");
            button.className = `gallery-controls-${control}`;
            controlContainerToUse.appendChild(button);
          });
        } else {
          console.error("Control container not found.");
        }
      }

      useControls() {
        if (controlContainerToUse) {
          const triggers = [...controlContainerToUse.childNodes].filter(
            (node) => node.nodeType === 1
          );
          triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
              e.preventDefault();
              this.setCurrentState(control);
              this.resetAutoSlide(); // Reset autoplay interval when manually clicking
            });
          });
        }
      }

      startAutoSlide(intervalTime = 3000) {
        this.autoSlideInterval = setInterval(() => {
          this.setCurrentState({ className: "gallery-controls-next" }); // Move to the next slide
        }, intervalTime);
      }

      resetAutoSlide(intervalTime = 3000) {
        clearInterval(this.autoSlideInterval); // Stop the current interval
        this.startAutoSlide(intervalTime); // Restart autoplay
      }
    }

    const exampleCarousel = new Carousel(
      galleryContainer,
      galleryItems,
      galleryControls,
      galleryNavItems,
      sectionContainer
    );

    exampleCarousel.setControls();
    exampleCarousel.updateGallery();
    exampleCarousel.useControls();
    exampleCarousel.startAutoSlide(3000);
    // Clean up function to clear the interval on component unmount
    return () => {
      console.log("Cleanup effect");
      clearInterval(exampleCarousel.autoSlideInterval);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount
  return (
    <section className="section-container">
      <div className="overlay"></div>
      <div className="left-paragraph">
        <h1 id="carousel-heading">BALI</h1>
        <p id="carousel-description"></p>
        <button className="explore-button">
          <span>Explore</span>
          <a href="/" target="_self" className="explore-arrow">
            →
          </a>
        </button>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>

      {/* Carousel with Prev and Next buttons */}
      <div className="gallery">
        <div className="gallery-container">
          <img
            className="gallery-item gallery-item-1"
            src="images/pexels-freestockpro-2166559.jpg"
            alt="BALI"
            data-heading="BALI"
            data-description="Dream Island Bali is also known as ‘The Island of Gods’ since it is home to several thousands of temples. You will find that the Balinese Hindu temples are unique as they display a seamless confluence of Indian culture and Bali’s traditional beliefs. As magnificent, intricate structures or as small shrines, most ancient temples in Bali are popular attractions that allow you to explore its fascinating history and traditions."
            data-index="1"
            loading="lazy"
          />
          <img
            className="gallery-item gallery-item-2"
            src="images/pexels-freestockpro-2166643.jpg"
            alt="THAILAND"
            data-heading="THAILAND"
            data-description="You will love leisurely lounging on spectacular beaches with our Bali tour packages! Bali boasts of a fabulous coastline with beaches that differ from one area to another. While some offer you pristine white sand and turquoise waters, others have black volcanic beaches. You can choose your beaches per the activities you intend to take."
            data-index="2"
            loading="lazy"
          />
          <img
            className="gallery-item gallery-item-3"
            src="images/pexels-michael-block-1691617-3225531.jpg"
            alt="RUSSIA"
            data-heading="RUSSIA"
            data-description="When you choose the neighborhood to stay in or spend your time in Bali, choose the most popular ones. The dream island Bali is home to some smaller neighboring islands that are part of the total nine districts."
            data-index="3"
            loading="lazy"
          />
          <img
            className="gallery-item gallery-item-4"
            src="images/pexels-sliceisop-1544351.jpg"
            alt="SWITZERLAND"
            data-heading="SWITZERLAND"
            data-description="The latest Instagram spot associated with Bali is the Bali Swing. This spot is quite popular with honeymooners and is part of our Bali honeymoon packages. As you experience the various levels of swings, you get clicked up high in the air with lush greenery as the backdrop. Most Bali swing places also have props like a giant nest, basket, etc., for you to take pictures with your loved one."
            data-index="4"
            loading="lazy"
          />
          <img
            className="gallery-item gallery-item-5"
            src="images/pexels-timrael-2474690.jpg"
            alt="MOROCCO"
            data-heading="MOROCCO"
            data-description="Our Bali trip packages can customize by visiting Bali Safari & Marine Park with your family. Observe more than 100 species of unique animals, including some rare and endangered species. You can also look at exhibits featuring the Sumatran elephant, Sumatran tiger, white tiger, leopard, Komodo dragon, etc."
            data-index="5"
            loading="lazy"
          />

          <div
            className="gallery-controls"
            id="gallery-controls-placeholder"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
