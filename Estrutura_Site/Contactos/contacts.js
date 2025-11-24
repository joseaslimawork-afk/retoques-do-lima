// ========================================
// FORMULÁRIO DE CONTACTO
// ========================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = contactForm.querySelector('.submit-btn');

// Validação de email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação de telefone (formato português)
function isValidPhone(phone) {
  if (!phone) return true; // Campo opcional
  const regex = /^(\+351)?[0-9]{9,}$/;
  return regex.test(phone.replace(/\s/g, ''));
}

// Mostrar mensagem
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  
  // Scroll suave até a mensagem
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Remover mensagem após 5 segundos
  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
}

// Limpar formulário
function clearForm() {
  contactForm.reset();
}

// Enviar formulário
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Obter valores dos campos
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    service: document.getElementById('service').value,
    message: document.getElementById('message').value.trim()
  };
  
  // Validações
  if (!formData.name || formData.name.length < 3) {
    showMessage('Por favor, insira um nome válido (mínimo 3 caracteres).', 'error');
    return;
  }
  
  if (!isValidEmail(formData.email)) {
    showMessage('Por favor, insira um email válido.', 'error');
    return;
  }
  
  if (!isValidPhone(formData.phone)) {
    showMessage('Por favor, insira um número de telefone válido.', 'error');
    return;
  }
  
  if (!formData.message || formData.message.length < 10) {
    showMessage('Por favor, escreva uma mensagem com pelo menos 10 caracteres.', 'error');
    return;
  }
  
  // Animação de loading
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  // Simular envio (substituir por API real)
  try {
    // Aqui você conectaria com um backend real
    // Exemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay de rede
    
    // Sucesso
    showMessage('✓ Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
    clearForm();
    
    // Log dos dados (remover em produção)
    console.log('Dados do formulário:', formData);
    
  } catch (error) {
    // Erro
    showMessage('✗ Erro ao enviar mensagem. Por favor, tente novamente mais tarde.', 'error');
    console.error('Erro:', error);
    
  } finally {
    // Remover loading
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  }
});

// Validação em tempo real
document.getElementById('email').addEventListener('blur', function() {
  if (this.value && !isValidEmail(this.value)) {
    this.style.borderColor = '#e74c3c';
  } else {
    this.style.borderColor = '#e0e0e0';
  }
});

document.getElementById('phone').addEventListener('blur', function() {
  if (this.value && !isValidPhone(this.value)) {
    this.style.borderColor = '#e74c3c';
  } else {
    this.style.borderColor = '#e0e0e0';
  }
});

// Formatar telefone automaticamente
document.getElementById('phone').addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  // Adiciona +351 se começar com 9
  if (value.startsWith('9') && value.length === 9) {
    value = '351' + value;
  }
  
  // Formata: +351 912 345 678
  if (value.length > 3) {
    value = '+' + value.slice(0, 3) + ' ' + value.slice(3);
  }
  if (value.length > 8) {
    value = value.slice(0, 8) + ' ' + value.slice(8);
  }
  if (value.length > 12) {
    value = value.slice(0, 12) + ' ' + value.slice(12);
  }
  
  e.target.value = value.slice(0, 17); // Limita tamanho
});


// ========================================
// ANIMAÇÕES DE ENTRADA
// ========================================

// Observador de intersecção para animar elementos ao entrar na tela
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar cards de informação
document.querySelectorAll('.info-card, .social-links').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});