function shrinkImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.width = '50%';
    img.style.height = 'auto';
  });
}
