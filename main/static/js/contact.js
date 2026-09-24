   // Mobile menu
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('hidden');
            menuBtn.setAttribute('aria-expanded', String(menuOpen));
            menuIcon.setAttribute('d', menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuIcon.setAttribute('d', 'M4 7h16M4 12h16M4 17h16');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && menuOpen) {
                menuOpen = false;
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuIcon.setAttribute('d', 'M4 7h16M4 12h16M4 17h16');
            }
        });

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

        // Scroll reveal
        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            revealEls.forEach(el => io.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('visible'));
        }