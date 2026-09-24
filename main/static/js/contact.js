// Contact form validation
const contactForm = document.getElementById('contact-form');
const successBox = document.getElementById('form-success');

function setError(input, show) {
    input.classList.toggle('error', show);
    const err = input.closest('div').querySelector('.form-error');
    if (err) err.classList.toggle('hidden', !show);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim().length < 2) { setError(name, true); valid = false; } else { setError(name, false); }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk) { setError(email, true); valid = false; } else { setError(email, false); }
    if (message.value.trim().length < 5) { setError(message, true); valid = false; } else { setError(message, false); }

    if (valid) {
        successBox.classList.remove('hidden');
        contactForm.reset();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

['name', 'email', 'message'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => setError(document.getElementById(id), false));
});