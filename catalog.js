checkAuth();

// Base de dados de filmes e séries reais
const moviesDatabase = [
    { id: 1, title: 'Um Sonho de Liberdade', year: 1994, rating: 9.3, category: 'drama', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
    { id: 2, title: 'O Poderoso Chefão', year: 1972, rating: 9.2, category: 'drama', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: 3, title: 'Batman: O Cavaleiro das Trevas', year: 2008, rating: 9.0, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 4, title: 'Breaking Bad', year: 2008, rating: 9.5, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' },
    { id: 5, title: 'A Origem', year: 2010, rating: 8.8, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { id: 6, title: 'Matrix', year: 1999, rating: 8.7, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { id: 7, title: 'Stranger Things', year: 2016, rating: 8.7, category: 'scifi', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg' },
    { id: 8, title: 'The Office', year: 2005, rating: 9.0, category: 'comedy', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg' },
    { id: 9, title: 'Pulp Fiction', year: 1994, rating: 8.9, category: 'drama', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
    { id: 10, title: 'Invocação do Mal', year: 2013, rating: 7.5, category: 'horror', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
    { id: 11, title: 'Game of Thrones', year: 2011, rating: 9.3, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
    { id: 12, title: 'Interestelar', year: 2014, rating: 8.6, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { id: 13, title: 'Friends', year: 1994, rating: 8.9, category: 'comedy', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg' },
    { id: 14, title: 'Diário de uma Paixão', year: 2004, rating: 7.8, category: 'romance', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg' },
    { id: 15, title: 'Vingadores: Ultimato', year: 2019, rating: 8.4, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg' },
    { id: 16, title: 'The Walking Dead', year: 2010, rating: 8.2, category: 'horror', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg' },
    { id: 17, title: 'Titanic', year: 1997, rating: 7.9, category: 'romance', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { id: 18, title: 'Se Beber, Não Case!', year: 2009, rating: 7.7, category: 'comedy', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/uluhlXhjRJkH8bXP5NLjq7QWJuK.jpg' },
    { id: 19, title: 'Mad Max: Estrada da Fúria', year: 2015, rating: 8.1, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    { id: 20, title: 'The Crown', year: 2016, rating: 8.6, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg' },
    { id: 21, title: 'Blade Runner 2049', year: 2017, rating: 8.0, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
    { id: 22, title: 'It: A Coisa', year: 2017, rating: 7.3, category: 'horror', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg' },
    { id: 23, title: 'La La Land', year: 2016, rating: 8.0, category: 'romance', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
    { id: 24, title: 'Brooklyn Nine-Nine', year: 2013, rating: 8.4, category: 'comedy', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg' },
    { id: 25, title: 'John Wick', year: 2014, rating: 7.4, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg' },
    { id: 26, title: 'Peaky Blinders', year: 2013, rating: 8.8, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
    { id: 27, title: 'Dune', year: 2021, rating: 8.0, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { id: 28, title: 'A Maldição da Residência Hill', year: 2018, rating: 8.6, category: 'horror', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/38PkhBGRQtmVx2drvPik3F42qHO.jpg' },
    { id: 29, title: 'Orgulho e Preconceito', year: 2005, rating: 7.8, category: 'romance', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg' },
    { id: 30, title: 'Parks and Recreation', year: 2009, rating: 8.6, category: 'comedy', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/dDuzrl9rUIBYieZjqmtbJZ2xPyS.jpg' },
    { id: 31, title: 'Oppenheimer', year: 2023, rating: 8.3, category: 'drama', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: 32, title: 'Wednesday', year: 2022, rating: 8.6, category: 'comedy', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg' },
    { id: 33, title: 'Avatar: O Caminho da Água', year: 2022, rating: 7.6, category: 'scifi', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    { id: 34, title: 'The Last of Us', year: 2023, rating: 8.8, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { id: 35, title: 'Top Gun: Maverick', year: 2022, rating: 8.3, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' },
    { id: 36, title: 'Succession', year: 2018, rating: 8.9, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg' },
    { id: 37, title: 'Homem-Aranha: Através do Aranhaverso', year: 2023, rating: 8.7, category: 'action', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
    { id: 38, title: 'The Bear', year: 2022, rating: 8.6, category: 'drama', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/zCc1vkKhcVcuJ1O8MH4fHGZCGRr.jpg' },
    { id: 39, title: 'Barbie', year: 2023, rating: 7.0, category: 'comedy', type: 'Filme', poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { id: 40, title: 'The Mandalorian', year: 2019, rating: 8.7, category: 'scifi', type: 'Série', poster: 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg' }
];

let currentPage = 0;
let currentCategory = 'all';
let currentSearch = '';
const itemsPerPage = 12;

// Renderizar catálogo
function renderCatalog() {
    const catalog = document.getElementById('catalog');
    const filtered = getFilteredMovies();
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const movies = filtered.slice(start, end);
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => viewDetails(movie.id);
        
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.type} • ${movie.year}</p>
                <p class="rating">⭐ ${movie.rating}</p>
            </div>
        `;
        
        catalog.appendChild(card);
    });
    
    if (end >= filtered.length) {
        document.getElementById('loading').style.display = 'none';
    }
}

// Filtrar filmes
function getFilteredMovies() {
    let filtered = moviesDatabase;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(m => m.category === currentCategory);
    }
    
    if (currentSearch) {
        filtered = filtered.filter(m => 
            m.title.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    return filtered;
}

// Filtrar por categoria
function filterCategory(category) {
    currentCategory = category;
    currentPage = 0;
    document.getElementById('catalog').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    
    document.querySelectorAll('.categories button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderCatalog();
}

// Buscar
function searchContent() {
    currentSearch = document.getElementById('searchInput').value;
    currentPage = 0;
    document.getElementById('catalog').innerHTML = '';
    document.getElementById('loading').style.display = 'block';
    renderCatalog();
}

// Ver detalhes
function viewDetails(id) {
    localStorage.setItem('selectedMovie', id);
    window.location.href = 'details.html';
}

// Scroll infinito
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        const filtered = getFilteredMovies();
        if ((currentPage + 1) * itemsPerPage < filtered.length) {
            currentPage++;
            renderCatalog();
        }
    }
});

// Enter para buscar
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchContent();
});

// Inicializar
renderCatalog();
