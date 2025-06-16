
window.onload = function() {
    alert("Bem-vindo à Hype District! Confira as novidades!");
  };
  
  
  const productItems = document.querySelectorAll('.product-item');
  
  productItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease-in-out';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  

  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); 
      alert("Você será redirecionado para os detalhes do produto!");
    });
  });
  