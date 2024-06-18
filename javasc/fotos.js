const fotos = [
    {'categoria': 'categoria1', 'src': 'img/montaña1.jpg', 'alt': 'montaña', 'titulo': 'montaña', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria2', 'src': 'img/playa2.jpg', 'alt': 'playa', 'titulo': 'playa', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria3', 'src': 'img/frutal2.jpg', 'alt': 'frutales', 'titulo': 'frutales', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria3', 'src': 'img/frutal3.jpg', 'alt': 'frutales', 'titulo': 'frutales', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria1', 'src': 'img/montaña2.jpg', 'alt': 'montaña', 'titulo': 'montaña', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria2', 'src': 'img/playa1.jpg', 'alt': 'playa', 'titulo': 'playa', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria3', 'src': 'img/frutal1.jpg', 'alt': 'frutales', 'titulo': 'frutales', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria1', 'src': 'img/montaña3.jpg', 'alt': 'montaña', 'titulo': 'montaña', 'descripcion': 'lorem ipsum dolor'},
    {'categoria': 'categoria2', 'src': 'img/playa2.jpg', 'alt': 'playa', 'titulo': 'playa', 'descripcion': 'lorem ipsum dolor'}


]
document.addEventListener('DOMContentLoaded', () => {
    const galeria = document.getElementById('galeria');
    const buttons = document.querySelectorAll('.btn');

    const renderFotos = (filter) => {
        galeria.innerHTML = '';
        const filtrarFotos = filter === 'all' ? fotos : fotos.filter(foto => foto.categoria === filter);

        filtrarFotos.forEach(foto => {
          const  fotoElement = document.createElement('div');
          fotoElement.classList.add('column', foto.categoria, 'show');
          fotoElement.innerHTML =`
          <div class="content">
          <img src="${foto.src}" alt="${foto.alt}">
          <h4>${foto.titulo}</h4>
          <p>${foto.descripcion}</p>
          </div>
          `;
          galeria.appendChild(fotoElement);
        });
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderFotos(filter);
        });
    });

    renderFotos('all');
});
