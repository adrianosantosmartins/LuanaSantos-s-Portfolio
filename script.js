function menu() {
   const itens = document.getElementById('itens');
   if (itens.style.display === 'block') {
       itens.style.display = 'none';
   } else {
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
  container.style.marginTop = '-220px';
  const images = [
        'pictures/lips/lips1.jpg',
        'pictures/lips/lips2.jpg',        
        'pictures/lips/lips3.jpg',
        'pictures/lips/lips4.jpg',
        'pictures/lips/lips5.jpg',
        'pictures/lips/lips6.jpg'
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
        container.style.marginTop = '0px';
      });
}

function lash(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  container.style.marginTop = '-220px';
  const images = [
        'pictures/lash/ex1.jpg',
        'pictures/lash/ex2.jpg',        
        'pictures/lash/ex3.jpg',
        'pictures/lash/ex4.jpg',
        'pictures/lash/ex5.jpg',
        'pictures/lash/ex6.jpg'
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
        container.style.marginTop = '0px';

      });
}
function brow(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  container.style.marginTop = '-220px';
  const images = [
        'pictures/eyebrow/brow1.jpg',
        'pictures/eyebrow/brow2.jpg',        
        'pictures/eyebrow/brow3.jpg',
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
        container.style.marginTop = '0px';

      });
}
function lift(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  container.style.marginTop = '-220px';
  const images = [
        'pictures/lashlift/lash.jpg',
        'pictures/lashlift/lash2.jpg',        
        'pictures/lashlift/lash3.jpg',
        'pictures/lashlift/lash4.jpg',
        'pictures/lashlift/lash5.jpg',
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
        container.style.marginTop = '0px';

      });
}
function micro(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  container.style.marginTop = '-220px';
  const images = [
        'pictures/micro/micro.jpg',
        'pictures/micro/micro2.jpg',        
        'pictures/micro/micro3.jpg',
        'pictures/micro/micro4.jpg',
        'pictures/micro/micro5.jpg',
        'pictures/micro/micro6.jpg'
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
        container.style.marginTop = '0px';
      });
}
function cert(){
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('imageContainer');
  overlay.style.pointerEvents = 'auto';
  overlay.style.opacity = 1;
  container.style.marginBottom = '-500px';
  const images = [
        'pictures/certificate1.png'        
      ];
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.style.width = '350px';
    img.style.height = '350px';
    img.style.borderRadius = '0';
    img.src = src;
    container.appendChild(img);

    img.onload = () => {
      setTimeout(() => {
        img.style.opacity = 1;
      }, index * 500); // delay de 500ms entre cada imagem
    };
  });

    overlay.addEventListener('click', () => {
      overlay.style.opacity = 0;
      overlay.style.pointerEvents = 'none';
      container.innerHTML = '';
      container.style.marginBottom = '0px';
      });
  };
