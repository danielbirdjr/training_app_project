document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data (in localStorage for simplicity)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});

function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    if (usernameDisplay) {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = username;
        } else {
            window.location.href = 'index.html';
        }
    }
});
