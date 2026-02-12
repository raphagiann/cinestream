# CineStream - Portal de Filmes e Séries

Site completo sobre filmes e séries com sistema de login, catálogo e avaliações.

## 🎬 Funcionalidades

- **Sistema de Login**: Usuários pré-cadastrados (Raphael, Elisangela, Julia) e opção de criar novos usuários
- **Catálogo Completo**: Filmes e séries do mundo todo com scroll infinito
- **Filtros por Categoria**: Ação, Comédia, Drama, Terror, Ficção Científica, Romance
- **Busca**: Sistema de pesquisa por título
- **Detalhes**: Página com sinopse e avaliações de cada filme/série
- **Design Responsivo**: Paleta de cores em azul e preto

## 🚀 Como Hospedar no GitHub Pages

### 1. Criar Repositório no GitHub
- Acesse [GitHub](https://github.com) e faça login
- Clique em "New repository"
- Nomeie o repositório (ex: `cinestream`)
- Marque como "Public"
- Clique em "Create repository"

### 2. Fazer Upload dos Arquivos
```bash
# No terminal, navegue até a pasta do projeto
cd c:\PORTFOLIO

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit - CineStream"

# Conecte ao repositório remoto (substitua SEU_USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU_USUARIO/cinestream.git

# Envie os arquivos
git push -u origin main
```

### 3. Ativar GitHub Pages
- No repositório do GitHub, vá em "Settings"
- No menu lateral, clique em "Pages"
- Em "Source", selecione "main" branch
- Clique em "Save"
- Aguarde alguns minutos e seu site estará disponível em: `https://SEU_USUARIO.github.io/cinestream/`

## 🔐 Credenciais Padrão

**Usuários pré-cadastrados:**
- Raphael - Senha: `123456`
- Elisangela - Senha: `123456`
- Julia - Senha: `123456`

## 📁 Estrutura de Arquivos

```
PORTFOLIO/
├── index.html          # Página de login
├── catalog.html        # Catálogo de filmes/séries
├── details.html        # Detalhes e avaliações
├── styles.css          # Estilos (paleta azul e preto)
├── auth.js            # Sistema de autenticação
├── catalog.js         # Lógica do catálogo
├── details.js         # Lógica dos detalhes
└── README.md          # Este arquivo
```

## 🎨 Paleta de Cores

- Azul Escuro: `#0a0e27`, `#1a1f3a`, `#1e3a8a`, `#1e40af`
- Azul Claro: `#00bfff`, `#3b82f6`, `#4da6ff`, `#6b9bd1`
- Preto/Cinza: `#0a0e27`, `rgba(10, 20, 40, 0.9)`
- Destaques: `#ffd700` (dourado para avaliações)

## 💾 Banco de Dados

O site utiliza `localStorage` do navegador para armazenar:
- Usuários e senhas
- Sessão do usuário logado
- Preferências de busca

## 🌐 Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Gradientes)
- JavaScript (ES6+)
- LocalStorage API

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktop (1400px+)
- Tablet (768px - 1400px)
- Mobile (< 768px)

## 🔄 Funcionalidades Futuras

- Integração com API real de filmes (TMDB)
- Sistema de favoritos
- Avaliações personalizadas
- Modo escuro/claro
- Compartilhamento social

---

Desenvolvido com ❤️ para amantes de cinema e séries
