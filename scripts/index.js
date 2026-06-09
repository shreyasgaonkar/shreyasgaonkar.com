function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addExperience(val) {
    const div = document.createElement('div');
    div.className = 'box';
    div.innerHTML = `<img src="${escapeHtml(val.img)}" alt="${escapeHtml(val.company)} logo" loading="lazy">
        <p></p>
        <p class="job-title">${escapeHtml(val.title)}</p>
        <p class="job-dates">${escapeHtml(val.dates)}</p>
        <p>${escapeHtml(val.company)}</p>`;
    return div;
}

function addProjects(val) {
    const a = document.createElement('a');
    a.href = val.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    const img = val.img || './images/SG.png';
    a.innerHTML = `<div class="box"><img src="${escapeHtml(img)}" alt="${escapeHtml(val.name)}" loading="lazy">
        <p></p>
        <p class="job-title">${escapeHtml(val.name)}</p>
        <p class="job-dates">${escapeHtml(val.skills)}</p></div>`;
    return a;
}

function addTestimonials(val) {
    const div = document.createElement('div');
    div.className = 'box';
    const img = val.img || './images/SG.png';
    div.innerHTML = `<img src="${escapeHtml(img)}" alt="${escapeHtml(val.name)}" loading="lazy">
        <blockquote>${escapeHtml(val.content)}
            <span>${escapeHtml(val.name)},<span class="job-dates"> ${escapeHtml(val.title)} at ${escapeHtml(val.company)}</span></span>
        </blockquote>`;
    return div;
}

function addWriting(val) {
    const a = document.createElement('a');
    a.href = val.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    const img = val.img || './images/SG.png';
    a.innerHTML = `<div class="box"><img src="${escapeHtml(img)}" alt="${escapeHtml(val.source)}" loading="lazy">
        <p></p>
        <p class="job-title">${escapeHtml(val.name)}</p>
        <p class="job-dates">${escapeHtml(val.source)}</p></div>`;
    return a;
}

function loadSection(url, containerId, renderer) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            const container = document.getElementById(containerId);
            data.forEach(function (item) {
                container.appendChild(renderer(item));
            });
        });
}

document.addEventListener('DOMContentLoaded', function () {
    loadSection('./data/experience.json', 'experience', addExperience);
    loadSection('./data/projects.json', 'projects', addProjects);
    loadSection('./data/articles.json', 'writing', addWriting);
    loadSection('./data/testimonials.json', 'testimonials', addTestimonials);
});
