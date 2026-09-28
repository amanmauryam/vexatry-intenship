// Dashboard: dismiss the current-stage notice
const nextStep = document.getElementById('next-step');
const dismissNextStep = document.querySelector('[data-dismiss-next-step]');

if (nextStep && dismissNextStep) {
    const key = 'vexatry:dashboard:next-step-hidden';
    let hidden = false;

    try {
        hidden = window.sessionStorage.getItem(key) === '1';
    } catch (e) {
        hidden = false;
    }

    if (hidden) {
        nextStep.classList.add('hidden');
    }

    dismissNextStep.addEventListener('click', () => {
        nextStep.classList.add('hidden');
        try {
            window.sessionStorage.setItem(key, '1');
        } catch (e) {
            // Storage unavailable, the notice simply stays dismissed for this page.
        }
    });
}

// Keep the "current" stage row visible when the page opens
if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
