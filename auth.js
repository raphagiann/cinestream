// Banco de dados simulado usando localStorage
const DB = {
    users: {
        'Raphael': { password: '123456' },
        'Elisangela': { password: '123456' },
        'Julia': { password: '123456' }
    }
};

// Inicializar banco de dados
function initDB() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(DB.users));
    }
}

// Obter usuários do banco
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

// Salvar usuários no banco
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Selecionar usuário
let selectedUsername = '';

function selectUser(username) {
    selectedUsername = username;
    document.getElementById('selectedUser').textContent = `Usuário: ${username}`;
    document.getElementById('passwordModal').classList.add('active');
    document.getElementById('passwordInput').value = '';
    document.getElementById('errorMsg').textContent = '';
    document.getElementById('passwordInput').focus();
}

// Fechar modal
function closeModal() {
    document.getElementById('passwordModal').classList.remove('active');
    selectedUsername = '';
}

// Login
function login() {
    const password = document.getElementById('passwordInput').value;
    const users = getUsers();
    
    if (!password) {
        document.getElementById('errorMsg').textContent = 'Digite a senha';
        return;
    }
    
    if (users[selectedUsername] && users[selectedUsername].password === password) {
        localStorage.setItem('currentUser', selectedUsername);
        window.location.href = 'catalog.html';
    } else {
        document.getElementById('errorMsg').textContent = 'Senha incorreta';
    }
}

// Criar novo usuário
function createUser() {
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;
    
    if (!username || !password) {
        alert('Preencha todos os campos');
        return;
    }
    
    const users = getUsers();
    
    if (users[username]) {
        alert('Usuário já existe');
        return;
    }
    
    users[username] = { password: password };
    saveUsers(users);
    
    alert('Usuário criado com sucesso!');
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Verificar autenticação
function checkAuth() {
    if (!localStorage.getItem('currentUser')) {
        window.location.href = 'index.html';
    }
}

// Enter para login
document.addEventListener('DOMContentLoaded', () => {
    initDB();
    
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') login();
        });
    }
});
