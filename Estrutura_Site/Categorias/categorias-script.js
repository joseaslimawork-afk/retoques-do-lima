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
// DOWNLOAD DO PORTFÓLIO
// ========================================

const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  // Simula o download do PDF
  // Substitua 'portfolio.pdf' pelo caminho real do seu arquivo PDF
  
  // Opção 1: Link direto para o arquivo
  const link = document.createElement('a');
  link.href = 'portfolio.pdf'; // Coloque aqui o caminho do seu PDF
  link.download = 'Portfolio-Retoques-do-Lima.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Feedback visual
  const originalText = downloadBtn.innerHTML;
  downloadBtn.innerHTML = '<span>✓</span> Download Iniciado!';
  downloadBtn.style.background = '#28a745';
  
  setTimeout(() => {
    downloadBtn.innerHTML = originalText;
    downloadBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }, 3000);
});


// ========================================
// UTILITÁRIOS
// ========================================

// Atualizar ano automaticamente no footer
document.getElementById('ano').textContent = new Date().getFullYear();