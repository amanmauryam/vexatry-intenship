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