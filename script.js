function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (!username || !password) {
        document.getElementById('message').textContent = 'Preencha todos os campos!';
        return;
    }
    if (localStorage.getItem(username)) {
        document.getElementById('message').textContent = 'Usuário já existe!';
        return;
    }
    localStorage.setItem(username, btoa(password));
    document.getElementById('message').textContent = 'Cadastro bem-sucedido! Redirecionando...';
    setTimeout(() => window.location.href = 'login.html', 2000);
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && atob(storedPassword) === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Nome ou senha incorretos!';
    }
}
