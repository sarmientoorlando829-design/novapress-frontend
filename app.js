// Base de datos de noticias integrada directamente para evitar bloqueos del navegador
const noticias = [
    {
      "id": 1,
      "titulo": "El peso colombiano se fortalece ante el dólar",
      "categoria": "ECONOMÍA",
      "extracto": "El peso colombiano registra cifras positivas tras el reporte del PIB del segundo trimestre.",
      "imagen": "img/economia.jpg"
    },
    {
      "id": 2,
      "titulo": "Gobierno radica reforma pensional",
      "categoria": "POLÍTICA",
      "extracto": "El proyecto fue presentado ante el Congreso con cambios de último momento.",
      "imagen": "img/politica.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Renderizamos las noticias apenas cargue la página
    renderNoticias(noticias);
});

function renderNoticias(noticiasData) {
    const container = document.getElementById('news-container');
    if (!container) return;
    
    noticiasData.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'card';
        // Le damos un poco de estilo a las tarjetas para que se vean bien
        card.style.backgroundColor = '#1e1e1e';
        card.style.border = '1px solid #333';
        card.style.padding = '15px';
        card.style.borderRadius = '8px';
        card.style.width = '300px';

        card.innerHTML = `
            <h3 style="margin-top: 0;">${noticia.titulo}</h3>
            <span style="color: #d32f2f; font-weight: bold; font-size: 12px;">${noticia.categoria}</span>
            <p style="color: #ccc;">${noticia.extracto}</p>
            <button onclick="agregarFavorito(${noticia.id})" class="btn-red" style="margin-top:10px; background-color: #d32f2f; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 4px;">Guardar en Favoritos</button>
        `;
        container.appendChild(card);
    });
}

function agregarFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('¡Noticia guardada en favoritos exitosamente!');
    } else {
        alert('Esta noticia ya está en tu lista de favoritos.');
    }
}