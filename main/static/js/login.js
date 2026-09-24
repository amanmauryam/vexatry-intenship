// Login form validation
const loginForm = document.getElementById('login-form');
const successBox = document.getElementById('login-success');

function setError(input, show) {
    input.classList.toggle('error', show);
    const err = input.closest('div').querySelector('.form-error');
    if (err) err.classList.toggle('hidden', !show);
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk) { setError(email, true); valid = false; } else { setError(email, false); }
    if (password.value.length < 6) { setError(password, true); valid = false; } else { setError(password, false); }

    if (valid) {
        successBox.classList.remove('hidden');
        loginForm.reset();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

['email', 'password'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => setError(document.getElementById(id), false));
});