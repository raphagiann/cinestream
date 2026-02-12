checkAuth();

// Banco de dados completo com sinopses e avaliações
const moviesData = {
    1: {
        title: 'Um Sonho de Liberdade',
        year: 1994,
        rating: 9.3,
        category: 'Drama',
        type: 'Filme',
        duration: '142 min',
        poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        synopsis: 'Dois homens presos se unem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum. Andy Dufresne é condenado por um crime que não cometeu e forma uma amizade improvável com Red, um prisioneiro veterano.',
        reviews: [
            { author: 'João Silva', rating: 10, text: 'Obra-prima absoluta! Um dos melhores filmes já feitos. A história é emocionante e os personagens são inesquecíveis.' },
            { author: 'Maria Santos', rating: 9, text: 'Filme incrível sobre esperança e amizade. Tim Robbins e Morgan Freeman estão perfeitos!' },
            { author: 'Pedro Costa', rating: 10, text: 'Assisti várias vezes e sempre me emociono. Uma verdadeira lição de vida.' }
        ]
    },
    2: {
        title: 'O Poderoso Chefão',
        year: 1972,
        rating: 9.2,
        category: 'Drama',
        type: 'Filme',
        duration: '175 min',
        poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        synopsis: 'O patriarca envelhecido de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante. Uma saga épica sobre família, poder e lealdade no submundo do crime.',
        reviews: [
            { author: 'Ana Paula', rating: 10, text: 'Clássico absoluto! Marlon Brando está magistral. Um filme que define o gênero.' },
            { author: 'Carlos Mendes', rating: 9, text: 'Cinematografia perfeita e atuações impecáveis. Uma obra-prima de Coppola.' },
            { author: 'Lucia Ferreira', rating: 10, text: 'O melhor filme de máfia já feito. Cada cena é memorável.' }
        ]
    },
    3: {
        title: 'Batman: O Cavaleiro das Trevas',
        year: 2008,
        rating: 9.0,
        category: 'Ação',
        type: 'Filme',
        duration: '152 min',
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        synopsis: 'Quando a ameaça conhecida como Coringa causa estragos e caos nas pessoas de Gotham, Batman deve aceitar um dos maiores testes psicológicos e físicos de sua habilidade de lutar contra a injustiça.',
        reviews: [
            { author: 'Rafael Oliveira', rating: 10, text: 'Heath Ledger como Coringa é simplesmente perfeito! Melhor filme de super-herói.' },
            { author: 'Beatriz Lima', rating: 9, text: 'Christopher Nolan elevou o gênero a outro nível. Ação e drama equilibrados.' },
            { author: 'Thiago Rocha', rating: 10, text: 'Obra-prima do cinema moderno. Cada detalhe é pensado com perfeição.' }
        ]
    },
    4: {
        title: 'Breaking Bad',
        year: 2008,
        rating: 9.5,
        category: 'Drama',
        type: 'Série',
        duration: '5 temporadas',
        poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        synopsis: 'Um professor de química do ensino médio diagnosticado com câncer de pulmão inoperável se volta para a fabricação e venda de metanfetamina para garantir o futuro financeiro de sua família.',
        reviews: [
            { author: 'Fernanda Alves', rating: 10, text: 'A melhor série já feita! Bryan Cranston está perfeito como Walter White.' },
            { author: 'Gustavo Pires', rating: 10, text: 'Cada episódio é melhor que o anterior. Roteiro impecável!' },
            { author: 'Camila Souza', rating: 9, text: 'Viciante do início ao fim. A transformação do personagem é incrível.' }
        ]
    },
    5: {
        title: 'A Origem',
        year: 2010,
        rating: 8.8,
        category: 'Ficção Científica',
        type: 'Filme',
        duration: '148 min',
        poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        synopsis: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.',
        reviews: [
            { author: 'Leonardo Dias', rating: 9, text: 'Filme complexo e fascinante! Nolan é um gênio. Precisa assistir várias vezes.' },
            { author: 'Patricia Gomes', rating: 9, text: 'Efeitos visuais impressionantes e história original. Obra-prima!' },
            { author: 'Ricardo Martins', rating: 8, text: 'Muito bom, mas precisa de atenção total. Vale cada minuto.' }
        ]
    },
    6: {
        title: 'Matrix',
        year: 1999,
        rating: 8.7,
        category: 'Ficção Científica',
        type: 'Filme',
        duration: '136 min',
        poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        synopsis: 'Um hacker de computador aprende com misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.',
        reviews: [
            { author: 'Marcos Vieira', rating: 10, text: 'Revolucionou o cinema! Efeitos especiais inovadores e filosofia profunda.' },
            { author: 'Julia Campos', rating: 9, text: 'Clássico atemporal. As cenas de ação são icônicas!' },
            { author: 'André Barbosa', rating: 9, text: 'Filme que mudou o cinema de ficção científica para sempre.' }
        ]
    },
    7: {
        title: 'Stranger Things',
        year: 2016,
        rating: 8.7,
        category: 'Ficção Científica',
        type: 'Série',
        duration: '4 temporadas',
        poster: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
        synopsis: 'Quando um menino desaparece, sua mãe, um chefe de polícia e seus amigos devem confrontar forças aterrorizantes para trazê-lo de volta. Uma homenagem aos anos 80 com elementos sobrenaturais.',
        reviews: [
            { author: 'Sofia Ribeiro', rating: 9, text: 'Nostalgia pura! Elenco jovem incrível e história envolvente.' },
            { author: 'Bruno Cardoso', rating: 8, text: 'Ótima série com referências aos clássicos dos anos 80.' },
            { author: 'Isabela Moreira', rating: 9, text: 'Viciante! Cada temporada mantém a qualidade.' }
        ]
    },
    8: {
        title: 'The Office',
        year: 2005,
        rating: 9.0,
        category: 'Comédia',
        type: 'Série',
        duration: '9 temporadas',
        poster: 'https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg',
        synopsis: 'Um mockumentary sobre um grupo de funcionários de escritório típicos, onde o dia de trabalho consiste em conflitos de ego, comportamento inadequado e tédio.',
        reviews: [
            { author: 'Rodrigo Nunes', rating: 10, text: 'A comédia mais engraçada de todos os tempos! Michael Scott é lendário.' },
            { author: 'Amanda Silva', rating: 9, text: 'Humor inteligente e personagens carismáticos. Assisto sempre!' },
            { author: 'Felipe Santos', rating: 10, text: 'Obra-prima da comédia. Cada episódio é hilário!' }
        ]
    },
    9: {
        title: 'Pulp Fiction',
        year: 1994,
        rating: 8.9,
        category: 'Drama',
        type: 'Filme',
        duration: '154 min',
        poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        synopsis: 'As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.',
        reviews: [
            { author: 'Daniela Costa', rating: 10, text: 'Tarantino no seu melhor! Diálogos brilhantes e narrativa não-linear perfeita.' },
            { author: 'Lucas Ferreira', rating: 9, text: 'Filme cult que nunca envelhece. Trilha sonora incrível!' },
            { author: 'Mariana Lopes', rating: 10, text: 'Obra-prima absoluta. Cada cena é memorável.' }
        ]
    },
    10: {
        title: 'Invocação do Mal',
        year: 2013,
        rating: 7.5,
        category: 'Terror',
        type: 'Filme',
        duration: '112 min',
        poster: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
        synopsis: 'Investigadores paranormais Ed e Lorraine Warren trabalham para ajudar uma família aterrorizada por uma presença sombria em sua fazenda.',
        reviews: [
            { author: 'Gabriel Souza', rating: 8, text: 'Filme de terror assustador de verdade! James Wan é mestre do suspense.' },
            { author: 'Carla Mendes', rating: 7, text: 'Muito bom para quem gosta de terror. Algumas cenas são aterrorizantes!' },
            { author: 'Paulo Oliveira', rating: 8, text: 'Terror bem feito, sem exageros. Atmosfera tensa do início ao fim.' }
        ]
    }
};

// Gerar dados para os outros filmes
for (let i = 11; i <= 40; i++) {
    const movies = [
        { title: 'Game of Thrones', category: 'Drama', type: 'Série', duration: '8 temporadas', poster: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg' },
        { title: 'Interestelar', category: 'Ficção Científica', type: 'Filme', duration: '169 min', poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
        { title: 'Friends', category: 'Comédia', type: 'Série', duration: '10 temporadas', poster: 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg' },
        { title: 'Diário de uma Paixão', category: 'Romance', type: 'Filme', duration: '123 min', poster: 'https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg' },
        { title: 'Vingadores: Ultimato', category: 'Ação', type: 'Filme', duration: '181 min', poster: 'https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg' },
        { title: 'The Walking Dead', category: 'Terror', type: 'Série', duration: '11 temporadas', poster: 'https://image.tmdb.org/t/p/w500/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg' },
        { title: 'Titanic', category: 'Romance', type: 'Filme', duration: '194 min', poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
        { title: 'Se Beber, Não Case!', category: 'Comédia', type: 'Filme', duration: '100 min', poster: 'https://image.tmdb.org/t/p/w500/uluhlXhjRJkH8bXP5NLjq7QWJuK.jpg' },
        { title: 'Mad Max: Estrada da Fúria', category: 'Ação', type: 'Filme', duration: '120 min', poster: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
        { title: 'The Crown', category: 'Drama', type: 'Série', duration: '6 temporadas', poster: 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg' },
        { title: 'Blade Runner 2049', category: 'Ficção Científica', type: 'Filme', duration: '164 min', poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg' },
        { title: 'It: A Coisa', category: 'Terror', type: 'Filme', duration: '135 min', poster: 'https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg' },
        { title: 'La La Land', category: 'Romance', type: 'Filme', duration: '128 min', poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg' },
        { title: 'Brooklyn Nine-Nine', category: 'Comédia', type: 'Série', duration: '8 temporadas', poster: 'https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg' },
        { title: 'John Wick', category: 'Ação', type: 'Filme', duration: '101 min', poster: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg' },
        { title: 'Peaky Blinders', category: 'Drama', type: 'Série', duration: '6 temporadas', poster: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
        { title: 'Dune', category: 'Ficção Científica', type: 'Filme', duration: '155 min', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
        { title: 'A Maldição da Residência Hill', category: 'Terror', type: 'Série', duration: '1 temporada', poster: 'https://image.tmdb.org/t/p/w500/38PkhBGRQtmVx2drvPik3F42qHO.jpg' },
        { title: 'Orgulho e Preconceito', category: 'Romance', type: 'Filme', duration: '129 min', poster: 'https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg' },
        { title: 'Parks and Recreation', category: 'Comédia', type: 'Série', duration: '7 temporadas', poster: 'https://image.tmdb.org/t/p/w500/dDuzrl9rUIBYieZjqmtbJZ2xPyS.jpg' },
        { title: 'Oppenheimer', category: 'Drama', type: 'Filme', duration: '180 min', poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
        { title: 'Wednesday', category: 'Comédia', type: 'Série', duration: '1 temporada', poster: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg' },
        { title: 'Avatar: O Caminho da Água', category: 'Ficção Científica', type: 'Filme', duration: '192 min', poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
        { title: 'The Last of Us', category: 'Drama', type: 'Série', duration: '1 temporada', poster: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
        { title: 'Top Gun: Maverick', category: 'Ação', type: 'Filme', duration: '131 min', poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' },
        { title: 'Succession', category: 'Drama', type: 'Série', duration: '4 temporadas', poster: 'https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg' },
        { title: 'Homem-Aranha: Através do Aranhaverso', category: 'Ação', type: 'Filme', duration: '140 min', poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
        { title: 'The Bear', category: 'Drama', type: 'Série', duration: '2 temporadas', poster: 'https://image.tmdb.org/t/p/w500/zCc1vkKhcVcuJ1O8MH4fHGZCGRr.jpg' },
        { title: 'Barbie', category: 'Comédia', type: 'Filme', duration: '114 min', poster: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
        { title: 'The Mandalorian', category: 'Ficção Científica', type: 'Série', duration: '3 temporadas', poster: 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg' }
    ];
    
    const movie = movies[i - 11];
    moviesData[i] = {
        title: movie.title,
        year: 2000 + (i % 20),
        rating: 7.5 + (Math.random() * 1.5),
        category: movie.category,
        type: movie.type,
        duration: movie.duration,
        poster: movie.poster,
        synopsis: `${movie.title} é uma ${movie.type.toLowerCase()} aclamada que conquistou o público mundial. Com uma narrativa envolvente e personagens memoráveis, esta produção se destaca pela qualidade técnica e roteiro bem elaborado. Uma experiência cinematográfica que vale a pena conferir.`,
        reviews: [
            { author: 'Usuário ' + i, rating: 8, text: 'Excelente produção! Recomendo muito.' },
            { author: 'Crítico ' + i, rating: 7, text: 'Boa história, bem executada.' },
            { author: 'Fã ' + i, rating: 9, text: 'Adorei! Uma das melhores que já vi.' }
        ]
    };
}

// Renderizar detalhes
function renderDetails() {
    const movieId = localStorage.getItem('selectedMovie');
    const movie = moviesData[movieId];
    
    if (!movie) {
        window.location.href = 'catalog.html';
        return;
    }
    
    const detailsContainer = document.getElementById('movieDetails');
    
    detailsContainer.innerHTML = `
        <div class="details-header">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="details-info">
                <h2>${movie.title}</h2>
                <div class="meta">
                    <span>${movie.type}</span>
                    <span>${movie.year}</span>
                    <span>${movie.duration}</span>
                    <span>${movie.category}</span>
                    <span class="rating">⭐ ${movie.rating.toFixed(1)}</span>
                </div>
                <div class="synopsis">
                    <h3>Sinopse</h3>
                    <p>${movie.synopsis}</p>
                </div>
            </div>
        </div>
        
        <div class="reviews">
            <h3>Avaliações</h3>
            ${movie.reviews.map(review => `
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-author">${review.author}</span>
                        <span class="review-rating">⭐ ${review.rating}/10</span>
                    </div>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Voltar
function goBack() {
    window.location.href = 'catalog.html';
}

// Buscar
function searchContent() {
    const search = document.getElementById('searchInput').value;
    localStorage.setItem('searchQuery', search);
    window.location.href = 'catalog.html';
}

// Enter para buscar
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchContent();
});

// Inicializar
renderDetails();
