// login validation and redirect
if (document.getElementById('login-form')) {
    const form = document.getElementById('login-form');
    const userMsg = document.getElementById('user-msg');
    const passMsg = document.getElementById('pass-msg');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        const username = form.username.value.trim();
        const password = form.password.value.trim();
        userMsg.textContent = '';
        passMsg.textContent = '';

        if (!username) {
            userMsg.textContent = 'Please enter your username.';
            valid = false;
        }
        if (!password) {
            passMsg.textContent = 'Please enter your password.';
            valid = false;
        }

        if (valid) {
            // simulate successful login
            window.location.href = 'home.html';
        }
    });
}

// navigation toggle
if (document.getElementById('nav-toggle')) {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}