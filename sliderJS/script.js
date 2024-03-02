document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = Array.from(document.getElementsByClassName('slide'));
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');
  let currentIndex = 0;
  let isAnimating = false;

  const createDots = () => {
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        if (!isAnimating) goToSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    updateDots();
  };

  const updateDots = () => {
    Array.from(dotsContainer.children).forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const goToSlide = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    isAnimating = true;
    const slideWidth = slides[0].offsetWidth;
    const moveDistance = (newIndex - currentIndex) * slideWidth;
    const duration = 500;
    const interval = 20;
    let elapsed = 0;

    const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const intervalId = setInterval(() => {
      elapsed += interval;
      const timeFraction = elapsed / duration;
      const easedTime = easing(Math.min(timeFraction, 1));
      slidesContainer.style.transform = `translateX(${-(
        currentIndex * slideWidth +
        easedTime * moveDistance
      )}px)`;

      if (elapsed >= duration) {
        clearInterval(intervalId);
        currentIndex = newIndex;
        slidesContainer.style.transform = `translateX(-${
          currentIndex * slideWidth
        }px)`;
        updateDots();
        isAnimating = false;
      }
    }, interval);
  };

  prevButton.addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  });

  nextButton.addEventListener('click', () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  });

  createDots();
  updateDots();
});
