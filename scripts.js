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
