const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://shreyasgaonkar.com';
const ROOT = path.resolve(__dirname, '..');
const IGNORE = ['node_modules', '.git', 'font-awesome'];

function findHtmlFiles(dir, files = []) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        if (IGNORE.includes(entry)) continue;
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            findHtmlFiles(fullPath, files);
        } else if (entry === 'index.html') {
            files.push(fullPath);
        }
    }
    return files;
}

const today = new Date().toISOString().split('T')[0];
const htmlFiles = findHtmlFiles(ROOT);

const urls = htmlFiles.map(function (file) {
    const relative = path.relative(ROOT, path.dirname(file));
    const loc = relative ? `${SITE_URL}/${relative}` : `${SITE_URL}/`;
    const priority = relative ? '0.80' : '1.00';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${urls.length} URLs`);
