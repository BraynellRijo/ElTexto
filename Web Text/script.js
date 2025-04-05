document.addEventListener("DOMContentLoaded", () => {
  const slidesWrapper = document.getElementById('slidesWrapper');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = Array.from(slidesWrapper.children);

  let currentIndex = 0;

  function updateSlidePosition() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });

  slides.forEach(slide => {
    const verCaracteristicasBtn = slide.querySelector('.ver-caracteristicas-btn');
    const popupOverlay = slide.querySelector('.popup-overlay');
    const closePopupBtn = slide.querySelector('.close-popup-btn');

    if (verCaracteristicasBtn && popupOverlay && closePopupBtn) {
      verCaracteristicasBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';
      });

      closePopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
      });

      popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
          popupOverlay.style.display = 'none';
        }
      });
    }
  });

  const elements = document.querySelectorAll("main > div");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });
});