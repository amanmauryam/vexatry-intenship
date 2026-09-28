// Apply form validation
const applyForm = document.getElementById('apply-form');
const successBox = document.getElementById('apply-success');

function setError(input, show) {
    input.classList.toggle('error', show);
    const err = input.closest('div').querySelector('.form-error');
    if (err) err.classList.toggle('hidden', !show);
}

applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const role = document.getElementById('role');
    const portfolio = document.getElementById('portfolio');
    const why = document.getElementById('why');

    if (name.value.trim().length < 2) { setError(name, true); valid = false; } else { setError(name, false); }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk) { setError(email, true); valid = false; } else { setError(email, false); }

    const phoneOk = /^[+]?[\d\s-]{7,15}$/.test(phone.value.trim()) || phone.value.trim() === '';
    if (!phoneOk) { setError(phone, true); valid = false; } else { setError(phone, false); }

    if (!role.value) { setError(role, true); valid = false; } else { setError(role, false); }

    const urlOk = !portfolio.value.trim() || /^(https?:\/\/)/.test(portfolio.value.trim());
    if (!urlOk) { setError(portfolio, true); valid = false; } else { setError(portfolio, false); }

    if (why.value.trim().length < 20) { setError(why, true); valid = false; } else { setError(why, false); }

    if (valid) {
        successBox.classList.remove('hidden');
        applyForm.reset();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

['name', 'email', 'phone', 'role', 'portfolio', 'why'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => setError(document.getElementById(id), false));
});

// Pre-select role when arriving from an internship listing (?role=Name)
const params = new URLSearchParams(window.location.search);
const roleParam = params.get('role');
if (roleParam) {
    const role = document.getElementById('role');
    [...role.options].forEach(opt => {
        if (opt.value.toLowerCase() === roleParam.toLowerCase()) role.value = opt.value;
    });
    if (role.value) {
        role.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}