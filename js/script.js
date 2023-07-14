var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let header = document.getElementById('header');


window.addEventListener('scroll', () => {
  if(window.scrollY >= 200) {
    header.style.background = 'rgba(30, 40, 53, 0.89)'
  } else {
    header.style.background = 'transparent'
  }
})


