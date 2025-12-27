// ========================================
// MENU HAMBÚRGUER
// ========================================

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Abrir/fechar menu
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !sidebar.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

// Fechar menu ao clicar em um link
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});


// ========================================
// LIGHTBOX (VISUALIZADOR DE IMAGENS)
// ========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const galleryItems = document.querySelectorAll('.gallery-item');

let currentIndex = 0;

// Abrir lightbox
function openLightbox(index) {
  currentIndex = index;
  const item = galleryItems[index];
  const imgSrc = item.getAttribute('data-src');
  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Bloqueia scroll do body
}

// Fechar lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restaura scroll
}

// Navegar para imagem anterior
function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentIndex);
}

// Navegar para próxima imagem
function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openLightbox(currentIndex);
}

// Event listeners - Clique nas imagens da galeria
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

// Event listeners - Botões do lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// Fechar ao clicar no fundo escuro
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});


// ========================================
// UTILITÁRIOS
// ========================================

// Atualizar ano automaticamente no footer
document.getElementById('ano').textContent = new Date().getFullYear();