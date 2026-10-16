const previous = document.querySelector('.slide__previous');
const next = document.querySelector('.slide__next');

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'ArrowLeft') {
      window.open(previous.href, '_self');
    }
  
    if (keyName === 'ArrowRight') {
      window.open(next.href, '_self');
    }

  }, false
);


document.addEventListener('touchstart', (e => {
    const touchStartX = e.changedTouches[0].screenX;
    const touchStartY = e.changedTouches[0].screenY;
}));

document.addEventListener('touchend', (e => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}));

const handleSwipe  = () => {
    if (touchEndX < touchStartX) {
        window.open(previous.href, '_self');
    }
    if (touchEndX > touchStartX) {
        window.open(next.href, '_self');
    }
};