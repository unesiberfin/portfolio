window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      el.classList.add('active');
    }
  });

  const topBtn = document.getElementById('backToTop');
  if (topBtn) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  }
});

const photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

let currentIndex = 0;

function openGallery() {
  const modal = document.getElementById("photo-modal");
  if (!modal) return;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("photo-modal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function changePhoto(step) {
  currentIndex += step;

  if (currentIndex >= photos.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = photos.length - 1;

  const modalImg = document.getElementById("modal-img");
  if (modalImg) {
    modalImg.src = photos[currentIndex];
  }
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById("photo-modal");
  if (modal && event.target === modal) {
    closeGallery();
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// hamburger menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

if (menu && menuLinks) {
  menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
}

// project tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.project-tab');
  const projectPanels = document.querySelectorAll('.project-panel');

  if (!tabButtons.length || !projectPanels.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      projectPanels.forEach((panel) => {
        panel.classList.remove('active');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});
