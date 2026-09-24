// FAQ accordion
function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('span:last-child');
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-toggle').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.querySelector('span:last-child').textContent = '+';
    });

    if (!isOpen) {
        answer.classList.add('open');
        icon.textContent = '\u2212';
        btn.setAttribute('aria-expanded', 'true');
    }
}

document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => toggleFaq(btn));
});


// Certificate verification
function verifyCert() {
    const input = document.getElementById('cert-input').value.trim().toUpperCase();
    const result = document.getElementById('verify-result');
    const valid = document.getElementById('verify-valid');
    const invalid = document.getElementById('verify-invalid');

    result.classList.remove('hidden');

    if (input === 'VG-CERT-2026-00124') {
        valid.classList.remove('hidden');
        invalid.classList.add('hidden');
    } else {
        valid.classList.add('hidden');
        invalid.classList.remove('hidden');
    }
}

function resetVerify() {
    document.getElementById('verify-result').classList.add('hidden');
    document.getElementById('verify-valid').classList.add('hidden');
    document.getElementById('verify-invalid').classList.add('hidden');
    document.getElementById('cert-input').value = '';
    document.getElementById('cert-input').focus();
}

document.getElementById('verify-btn').addEventListener('click', verifyCert);
document.getElementById('reset-btn').addEventListener('click', resetVerify);

document.getElementById('cert-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyCert();
});