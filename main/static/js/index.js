
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

        // Internship filters
        const searchInput = document.getElementById('search');
        const deptFilter = document.getElementById('filter-dept');
        const modeFilter = document.getElementById('filter-mode');
        const durationFilter = document.getElementById('filter-duration');
        const rows = Array.from(document.querySelectorAll('.intern-row'));
        const resultCount = document.getElementById('result-count');
        const emptyState = document.getElementById('empty-state');

        function applyFilters() {
            const q = searchInput.value.trim().toLowerCase();
            const dept = deptFilter.value;
            const mode = modeFilter.value;
            const dur = durationFilter.value;
            let visible = 0;

            rows.forEach(row => {
                const text = (row.dataset.title + ' ' + row.dataset.desc).toLowerCase();
                const match =
                    (!q || text.includes(q)) &&
                    (!dept || row.dataset.dept === dept) &&
                    (!mode || row.dataset.mode === mode) &&
                    (!dur || row.dataset.duration === dur);

                row.classList.toggle('hidden', !match);
                if (match) visible++;
            });

            resultCount.textContent = visible + (visible === 1 ? ' Internship' : ' Internships');
            emptyState.classList.toggle('hidden', visible !== 0);
        }

        [searchInput, deptFilter, modeFilter, durationFilter].forEach(el => {
            el.addEventListener('input', applyFilters);
            el.addEventListener('change', applyFilters);
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

        document.getElementById('cert-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') verifyCert();
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
  