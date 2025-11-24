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
// UTILITÁRIOS
// ========================================

// Atualizar ano automaticamente no footer
document.getElementById('ano').textContent = new Date().getFullYear();