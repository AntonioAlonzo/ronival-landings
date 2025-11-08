window.addEventListener("load", () => {
  const items = document.querySelectorAll(".acordeon-item");

  items.forEach((item) => {
    const titulo = item.querySelector(".acordeon-titulo");
    const icono = item.querySelector(".acordeon-icono");
    const contenido = item.querySelector(".acordeon-contenido");

    titulo.addEventListener("click", () => {
      const estaActivo = item.classList.contains("activo");

      // Cierra todos
      items.forEach((i) => {
        i.classList.remove("activo");
        i.querySelector(".acordeon-icono").textContent = "+";
        i.querySelector(".acordeon-contenido").style.maxHeight = null;
      });

      // Si no estaba activo, ábrelo dinámicamente
      if (!estaActivo) {
        item.classList.add("activo");
        icono.textContent = "–";
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });
});

window.addEventListener("load", () => {
  const carousels = document.querySelectorAll(".image-carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    let currentIndex = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  });
});

window.addEventListener("load", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnails");
  const thumbnails = thumbnailsContainer.querySelectorAll("img");
  const images = Array.from(thumbnails).map((img) => img.src);

  let currentIndex = 0;
  thumbnails[0].classList.add("active");

  function updateCarousel(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];

    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });

    scrollThumbnailsToCurrent();
  }

  function scrollThumbnailsToCurrent() {
    const visibleThumbs = 4;
    const thumbWidth = thumbnails[0].offsetWidth;
    const scrollPos =
      Math.floor(currentIndex / visibleThumbs) * visibleThumbs * thumbWidth;
    thumbnailsContainer.style.transform = `translateX(-${scrollPos}px)`;
  }

  document.querySelector(".arrow.left").addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(newIndex);
  });

  document.querySelector(".arrow.right").addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % images.length;
    updateCarousel(newIndex);
  });

  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      updateCarousel(i);
    });
  });

  window.addEventListener("resize", scrollThumbnailsToCurrent);
});

window.addEventListener("load", () => {
  const carousels = document.querySelectorAll(".dot-carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".dot-carousel-track");
    const slides = Array.from(track.children);
    const dotsContainer = carousel.querySelector(".dot-carousel-dots");
    let currentIndex = 0;

    if (slides.length <= 1) {
      dotsContainer.style.display = "none";
      return;
    }

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-carousel-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === currentIndex)
      );
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);
  });
});
