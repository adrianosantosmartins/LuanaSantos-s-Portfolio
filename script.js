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