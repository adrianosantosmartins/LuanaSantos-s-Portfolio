function menu() {
   if (itens.style.display == 'block') {
       itens.style.display = 'none';
   }
      else {
       itens.style.display = 'block';
   }
}
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        },300);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1});
elements.forEach(el => {
  observer.observe(el);
});
function lips(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  const images = [
        'pictures/lips/goku.png',
        'pictures/lips/goku1.png',        
        'pictures/lips/goku2.png',
        'pictures/lips/goku3.png'
      ];
 images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        container.appendChild(img);

        img.onload = () => {
          setTimeout(() => {
            img.style.opacity = 1;
          }, index * 500); // delay de 500ms entre cada imagem
        };
      });

      // Fechar overlay ao clicar nele, limpando as imagens
      overlay.addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.pointerEvents = 'none';
        container.innerHTML = '';
      });
}